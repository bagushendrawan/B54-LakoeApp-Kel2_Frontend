import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { IoIosArrowForward, IoIosPin } from "react-icons/io";
import { IoWarning } from "react-icons/io5";

export function CheckoutPage() {
  const [selectTab, setSelectTab] = useState<number>(0)
  const tabCount = 2

  function next() {
    setSelectTab((selectTab + 1) % tabCount)
    console.log(selectTab);
    
  }


  return (
    <>
      <div className="bg-white m-3 rounded-lg p-3">
        <h1 className="text-xl font-bold">CHECKOUT</h1>

        <div className="mt-4">
          <div>
            <Tabs defaultValue={selectTab.toString()}>
              <TabsList className="grid w-3/5 grid-cols-2 cursor-not-allowed">
                <TabsTrigger value="0" className="cursor-not-allowed">
                  <p>Langkah 1 | Info Pengiriman</p>
                </TabsTrigger>
                <TabsTrigger value="1">
                  <p>Langkah 2 | Metode Pembayaran</p>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="0">
                <div className="flex ">
                  <div className="basis-3/5">
                    <div className="p-3 border border-black rounded-md mb-5">
                      <h1 className="font-bold mt-3">Informasi Kontak</h1>
                      <div className="space-y-1">
                        <Label htmlFor="nama">Nama</Label>
                        <Input id="nama" className="border-black" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="nomor">Nomor Whatsapp</Label>
                        <Input id="nomor" className="border-black" />
                      </div>
                    </div>

                    <div className="p-3 border rounded-md border-black mb-5">
                      <h1 className="font-bold mt-3">Alamat Pengiriman</h1>
                      <div className="space-y-1">
                        <Label htmlFor="nama">Nama</Label>
                        <Input id="nama" className="border-black" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="nomor">Nomor Whatsapp</Label>
                        <Input id="nomor" className="border-black" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="kecamatan">Kecamatan</Label>
                        <Input id="kecamatan" className="border-black" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="kelurahan">Kelurahan</Label>
                        <Input id="kelurahan" className="border-black" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="alamat">Detail Alamat</Label>
                        <Textarea
                          id="alamat"
                          className="resize-none border-black"
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
                                  Pastikan pin point lokasi sesuai dengan
                                  alamat!
                                </p>
                              </div>

                              <div>
                                <p>INI NANTI ISI MAPS</p>
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
                                Pembelian diatas pukul 15:00 WIB, pengiriman
                                akan diproses besok
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
                              <AccordionContent>
                                -
                              </AccordionContent>
                              <AccordionContent>
                                -
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <div className="border border-blue-900 bg-blue-300 w-5/6 rounded-lg p-3 mb-4">
                      <p>Ringkasan Pesanan</p>

                      <div className="mt-3 flex gap-3 items-center">
                        <img
                          src="https://dynamic.zacdn.com/zIQMmwJyckf2yUUA3uqlaTps7P4=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/ossu-6548-2787204-1.jpg"
                          alt="image"
                          className="w-3/12"
                        />

                        <div className="text-s">
                          <p>NAMA BARANG</p>
                          <p>1 item (100gr)</p>
                          <p>Rp 190.000</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center my-4">
                        <p>Total Harga (1)</p>
                        <p>Rp 190.000</p>
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

                    <Button className="w-5/6" onClick={next}>Pilih Pembayaran</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="1">
                <div className="flex ">
                  <div className="basis-3/5">
                    <div className="p-3 border border-black rounded-md mb-5">
                      <h1 className="font-bold my-3">E-Wallet</h1>
                      <Toggle className="w-5/12 flex gap-4 items-center border p-7">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png"
                          alt="ovo"
                          className="w-10"
                        />
                        OVO
                      </Toggle>

                      <h1 className="font-bold my-4">Transfer Bank</h1>

                      <div className="flex flex-wrap gap-4 mb-5">
                        <Toggle className="w-5/12 flex gap-4 items-center border p-7">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
                            alt="bca"
                            className="w-10"
                          />
                          BCA Virtual Account
                        </Toggle>

                        <Toggle className="w-5/12 flex gap-4 items-center border p-7">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1280px-BNI_logo.svg.png"
                            alt="bni"
                            className="w-10"
                          />
                          BNI Virtual Account
                        </Toggle>

                        <Toggle className="w-5/12 flex gap-4 items-center border p-7">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_BRI.png/1200px-Logo_BRI.png"
                            alt="bri"
                            className="w-10"
                          />
                          BRI Virtual Account
                        </Toggle>

                        <Toggle className="w-5/12 flex gap-4 items-center border p-7">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/320px-Bank_Mandiri_logo_2016.svg.png"
                            alt="ovo"
                            className="w-10"
                          />
                          Mandiri Virtual Account
                        </Toggle>

                        <Toggle className="w-5/12 flex gap-4 items-center border p-7">
                          <img
                            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYRXRn-ok9aV3B9zGFZqp3DpWXOtLu4Pf_3ErDOUhxEDQaLeHBTIbzJM_gbQ44XFXA2pEXv4yZek05MHHi0RsoQm_RIWJcgNqqpAr_fc3qP-PpgGnK5Tn7plQbNxwyPvaLW8YNwsfqjTcVm_htDWCHvi83bP2tOc4bZl9HaqU3rlzTc2GPcNu5wA/w640-h160/Bank%20Permata%20-koleksilogo.com.png"
                            alt="ovo"
                            className="w-10"
                          />
                          Permata Virtual Account
                        </Toggle>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col basis-2/5 items-center">
                    <div className="border border-black w-5/6 rounded-lg py-3 flex justify-center mb-4">
                      <p className="flex gap-2 items-center font-bold">
                        Gunakan / Masukkan Voucher <IoIosArrowForward />
                      </p>
                    </div>

                    <div className="border border-blue-900 bg-blue-300 w-5/6 rounded-lg p-3 mb-4">
                      <p>Ringkasan Pesanan</p>

                      <div className="mt-3 flex gap-3 items-center">
                        <img
                          src="https://dynamic.zacdn.com/zIQMmwJyckf2yUUA3uqlaTps7P4=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/ossu-6548-2787204-1.jpg"
                          alt="image"
                          className="w-3/12"
                        />

                        <div className="text-s">
                          <p>NAMA BARANG</p>
                          <p>1 item (100gr)</p>
                          <p>Rp 190.000</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center my-4">
                        <p>Total Harga (1)</p>
                        <p>Rp 190.000</p>
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

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-5/6">Bayar</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader className="border-b-2 py-3">
                          <DialogTitle>Rincian Pembayaran</DialogTitle>
                        </DialogHeader>

                        <div className="border border-blue-900 bg-blue-300 rounded-lg p-3 m-4 mb-0">
                          <div>
                            <p className="font-bold">TOTAL TAGIHAN</p>
                            <p className="text-blue-900 font-bold">
                              RP 190.000
                            </p>
                          </div>
                        </div>

                        <div className="border rounded-lg p-3 mx-4">
                          <div className="flex items-center gap-3 mb-3">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/320px-Bank_Mandiri_logo_2016.svg.png"
                              alt="ovo"
                              className="w-10"
                            />
                            <p className="font-bold">Mandiri Virtual Account</p>
                          </div>

                          <p>INFORMASI</p>
                          <p>
                            Pembayaran akan dicek secara otomatis dapatkan kode
                            virtual account setelah klik Bayar Sekarang
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <Button className="w-10/12">Bayar Sekarang</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
