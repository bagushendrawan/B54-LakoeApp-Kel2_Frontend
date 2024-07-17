import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import MapComponent from "@/components/location/index";
import { Textarea } from "@/components/textarea";
import { Toggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Route } from "@/routes/buyer/checkout";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosPin } from "react-icons/io";
import { IoWarning } from "react-icons/io5";

interface MidtransSnap extends Window {
  snap: {
    pay: (token: string) => void;
  };
}

// interface DataProduct {
//   name: string;
//   price: number;
//   image: string[];
// }

// const datasProduct: DataProduct = {
//   name: "BAJU POLOS",
//   price: 120000,
//   image: [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYBcR8lwHq-b82E_vCRw02NKJVbsTAJu9dw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYBcR8lwHq-b82E_vCRw02NKJVbsTAJu9dw&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYBcR8lwHq-b82E_vCRw02NKJVbsTAJu9dw&s",
//   ],
// };

// interface DataUser {
//   name: string;
//   phone: string;
// }

// const datasUser: DataUser = {
//   name: "Tiyo Igusty",
//   phone: "87654321234",
// };

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
  const params = Route.useSearch();
  console.log("params", params);

  const [dataOrder, setDataOrder] = useState<checkoutForm>({
    name: "",
    phone: "",
    receiver_name: "",
    receiver_phone: "",
    receiver_district: "",
    receiver_address: "",
    // courier_id: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;

    setDataOrder({
      ...dataOrder,
      [name]: value,
    });
  }

  async function handleSubmit() {
    try {
      const response = await Axios({
        method: "post",
        url: `http://localhost:3000/invoices`,
        data: dataOrder,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
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
          <form>
            <div className="flex ">
              <div className="basis-3/5">
                <div className="p-3 border border-black rounded-md mb-5">
                  <h1 className="font-bold mt-3">Informasi Kontak</h1>
                  <div className="space-y-1">
                    <Label htmlFor="nama">Nama</Label>
                    <Input
                      id="nama"
                      name="name"
                      className="border-black"
                      defaultValue="test"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone-input">Nomor Whatsapp</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        <p>+62</p>
                      </div>
                      <Input
                        type="text"
                        id="phone-input"
                        className="border border-black w-full ps-12"
                        placeholder="123-456-7890"
                        defaultValue="09876"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 border rounded-md border-black mb-5">
                  <h1 className="font-bold mt-3">Alamat Pengiriman</h1>
                  <div className="space-y-1">
                    <Label htmlFor="nama">Nama</Label>
                    <Input
                      id="nama"
                      name="receiver_name"
                      onChange={handleChange}
                      className="border-black"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone-input">Nomor Whatsapp</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        <p>+62</p>
                      </div>
                      <Input
                        type="text"
                        id="phone-input"
                        className="border border-black w-full ps-12"
                        placeholder="123-456-7890"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="kecamatan">Kecamatan</Label>
                    <Input
                      id="kecamatan"
                      name="receiver_district"
                      onChange={handleChange}
                      className="border-black"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="kelurahan">Kelurahan</Label>
                    <Input id="kelurahan" className="border-black" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="alamat">Detail Alamat</Label>
                    <Input
                      id="alamat"
                      name="receiver_address"
                      onChange={handleChange}
                      className="border-black h-20"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="alamat">Pin Alamat</Label>
                    <div className="p-3 border border-blue-900 bg-blue-100 rounded-md flex justify-around items-center">
                      <div className="flex gap-3 items-center">
                        <IoIosPin className="text-2xl" />
                        <p>
                          Karang Semut, Trimulya, Jetis, Bantul, Yogyakarta
                          Indonesia
                        </p>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-white text-blue-500 border border-blue-900 hover:bg-blue-200 hover:text-black">
                            Ubah Pin Point
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="text-sm">
                          <DialogHeader className="border-b-2 py-3">
                            <DialogTitle>Tandai Pin Point</DialogTitle>
                          </DialogHeader>

                          <div className="p-3 border border-blue-900 bg-blue-100 rounded-md flex gap-3 items-center">
                            <IoWarning />
                            <p>
                              Pastikan pin point lokasi sesuai dengan alamat!
                            </p>
                          </div>

                          <div>
                            <MapComponent />
                          </div>

                          <div className="flex gap-3 items-center text-blue-500">
                            <IoIosPin className="text-2xl" />
                            <p>
                              Karang Semut, Trimulya, Jetis, Bantul, Daerah
                              Istimewa Yogyakarta Indonesia
                            </p>
                          </div>

                          <div className="flex gap-5 justify-center">
                            <Button className="w-5/12 bg-white text-blue-500 border border-blue-900 hover:bg-blue-200 hover:text-black">
                              Kembali
                            </Button>
                            <Button className="w-5/12 bg-blue-700 text-white border border-blue-900 hover:bg-blue-200 hover:text-black">
                              Pilih Lokasi
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>

                <div className="p-3 border border-black rounded-md mb-5">
                  <h1 className="font-bold mb-3">Metode Pengiriman</h1>
                  <div className="space-y-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="px-5">
                          Pilih Metode Pengiriman
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="text-sm">
                        <DialogHeader className="border-b-2 py-3">
                          <DialogTitle>Pilih Metode Pengiriman</DialogTitle>
                        </DialogHeader>

                        <div>
                          <p className="font-bold">Reguler (2-4 Hari)</p>
                          <p>
                            Pembelian diatas pukul 15:00 WIB, pengiriman akan
                            diproses besok
                          </p>
                        </div>

                        <div>
                          <Toggle className="w-full flex justify-between gap-4 items-center border p-7">
                            <div className="flex gap-3 items-center">
                              <Checkbox id="jnt" />
                              <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/J%26T_Express_logo.svg/2560px-J%26T_Express_logo.svg.png"
                                alt="bca"
                                className="w-10"
                              />
                              <Label htmlFor="jnt">J&T</Label>
                            </div>
                            <div>
                              <p>Rp 190.000</p>
                            </div>
                          </Toggle>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>

              <div className="flex flex-col basis-2/5 items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="border border-black w-5/6 rounded-lg py-3 flex justify-center mb-4 cursor-pointer">
                      <p className="flex gap-2 items-center font-bold">
                        Gunakan / Masukkan Voucher <IoIosArrowForward />
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="text-sm">
                    <DialogHeader className="border-b-2 py-3">
                      <DialogTitle>Pilih Diskon Voucher</DialogTitle>

                      <div className="flex gap-3 pt-3">
                        <Input placeholder="Masukkan kode voucher" />
                        <Button>Terapkan</Button>
                      </div>
                    </DialogHeader>

                    <div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>
                            Pilih voucher yang tersedia
                          </AccordionTrigger>
                          <AccordionContent>-</AccordionContent>
                          <AccordionContent>-</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="border border-blue-900 bg-blue-300 w-5/6 rounded-lg p-3 mb-4">
                  <p>Ringkasan Pesanan</p>

                  <div className="mt-3 flex gap-3 items-center">
                    <img src="" alt="image" className="w-3/12 rounded-sm" />

                    <div className="text-s">
                      <p>Nama Produk</p>
                      <p>1 item (100gr)</p>
                      <p>Rp 120.0000</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center my-4">
                    <p>Total Harga (1)</p>
                    <p>Rp 120000</p>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b-2">
                    <p>Biaya Pengiriman</p>
                    <p>Rp 190.000</p>
                  </div>
                  <div className="flex justify-between items-center my-4">
                    <p>Total Pembayaran (1)</p>
                    <p>Rp 190.000</p>
                  </div>
                </div>

                <div className="border border-black w-5/6 rounded-lg p-3 mb-4">
                  <p className="mb-3">Catatan</p>
                  <Textarea
                    className="resize-none border-black"
                    placeholder="Tulis Catatan Pesananmu"
                  />
                </div>

                <Button
                  className="w-5/6"
                  onClick={async () => {
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
