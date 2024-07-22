import { Textarea } from "@/components/textarea";
import { Button } from "@/components/ui/button";
import Axios from "axios";
import React, { useEffect, useState } from "react";

import { AlamatPengiriman } from "../features/checkout/alamat-pengiriman";
import { GunakanVoucher } from "../features/checkout/gunakan-voucher";
import { InformasiKontak } from "../features/checkout/informasi-kontak";
import { MetodePengiriman } from "../features/checkout/metode-pengiriman";
import { RingkasanPesanan } from "../features/checkout/ringkasan-pesanan";
import { useCheckoutForm } from "../hooks/use-checkout-form";
import { FormProvider, useForm } from "react-hook-form";

interface MidtransSnap extends Window {
  snap: {
    pay: (token: string) => void;
  };
}

interface checkoutForm {
  name: string;
  phone: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_district: string;
  receiver_address: string;
  // courier_id: string,
}

export function CheckoutPage() {
  const form = useCheckoutForm()

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
          <form {...form}>
            <div className="flex ">
              <div className="basis-3/5">
                <InformasiKontak />

                <AlamatPengiriman />

                <MetodePengiriman />
              </div>

              <div className="flex flex-col basis-2/5 items-center">
                <GunakanVoucher />

                <RingkasanPesanan />

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
                  onClick={async (e) => {
                    e.preventDefault();
                    const response = await Axios.post(
                      "http://localhost:3000/payment"
                    );
                    console.log(response);

                    const token: string = response.data as string;
                    (window as unknown as MidtransSnap).snap.pay(token);
                  }}
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
