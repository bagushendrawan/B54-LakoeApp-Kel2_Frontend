import { Textarea } from "@/components/textarea";
import { Button } from "@/components/ui/button";
import Axios from "axios";
import { useEffect } from "react";

import { AlamatPengiriman } from "../features/checkout/alamat-pengiriman";
import { GunakanVoucher } from "../features/checkout/gunakan-voucher";
import { InformasiKontak } from "../features/checkout/informasi-kontak";
import { MetodePengiriman } from "../features/checkout/metode-pengiriman";
import { RingkasanPesanan } from "../features/checkout/ringkasan-pesanan";

interface MidtransSnap extends Window {
  snap: {
    pay: (token: string) => void;
  };
}

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "@/lib/api";

export type checkoutForm = {
  courier_code: string;
  courier_service: string;
  service_charge: number;
  receiver_longitude: string;
  receiver_latitude: string;
  receiver_district: string;
  receiver_phone: string;
  receiver_address: string;
  receiver_name: string;
  prices: number;
  user_id: string;
  store_id: string;
};

const checkoutSchema = z.object({
  courier_code: z.any(),
  courier_service: z.any(),
  service_charge: z.any(),
  receiver_name: z.any(),
  receiver_phone: z.any(),
  receiver_district: z.any(),
  receiver_address: z.any(),
  receiver_latitude: z.any(),
  receiver_longitude: z.any(),
  prices: z.any(),
  user_id: z.any(),
  store_id: z.any(),
});

export const useCheckoutForm = () => {
  const form = useForm<checkoutForm>({
    mode: "onChange",
    resolver: zodResolver(checkoutSchema),
  });

  return form;
};

export function CheckoutPage() {
  const formCheckout = useCheckoutForm();
  async function onSubmitForm(data: any) {
    try {
      // console.log("HIT SUBMIT");
      const response = await Axios({
        method: "post",
        url: `${api}/buyers/buy`,
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // console.log("hit", response.data);

      (window as unknown as MidtransSnap).snap.pay(response.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    const scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    const myMidtransClientKey = import.meta.env.PUBLIC_CLIENT;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      <div className="bg-white m-3 rounded-lg p-3">
        <h1 className="text-xl font-bold">CHECKOUT</h1>

        <div className="mt-4">
          <form onSubmit={formCheckout.handleSubmit(onSubmitForm)}>
            <div className="flex ">
              <div className="basis-3/5">
                <InformasiKontak form={formCheckout} />

                <AlamatPengiriman form={formCheckout} />

                <MetodePengiriman form={formCheckout} />
              </div>

              <div className="flex flex-col basis-2/5 items-center">
                <GunakanVoucher />

                <RingkasanPesanan form={formCheckout} />

                <div className="border border-black w-5/6 rounded-lg p-3 mb-4">
                  <p className="mb-3">Catatan</p>
                  <Textarea
                    className="resize-none border-black"
                    placeholder="Tulis Catatan Pesananmu"
                  />
                </div>

                <Button
                  className="w-5/6"
                  type="submit"
                  // onClick={() => console.log("HIT")}
                >
                  Bayar Sekarang
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
