import { Input } from "@/components/ui/input";
import {
  BelumDibayar,
  DalamPengiriman,
  Dibatalkan,
  PesananBaru,
  PesananSelesai,
  SiapDikirim,
} from "./card-pesanan";
import { DropdownKurir } from "./dropdown-kurir";
import { DropdownUrutan } from "./dropdown-urutan";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import Axios from "axios"

export function DaftarPesanan() {
  const token = localStorage.getItem("token")
  const [invoiceData, setInvoiceData] = useState([]);
  const [invoiceBelumData, setInvoiceBelumData] = useState([]);
  const [invoiceBaruData, setInvoiceBaruData] = useState([]);
  const [invoiceSiapData, setInvoiceSiapData] = useState([]);
  const [invoiceDalamData, setInvoiceDalamData] = useState([]);
  const [invoiceBatalData, setInvoiceBatalData] = useState([]);
  //9 == all
  const [status, setStatus] = useState(9);
  useEffect(() => {
    async function auth() {
      try {
        const response = await Axios({
          method: "get",
          url: `http://localhost:3000/form-produk/pesanan/80b735c5-f3e7-4917-93a2-3cefa1d128ed/9`,
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
        console.log("res",response.data)
        setInvoiceData(response.data)

        setInvoiceBelumData(response.data.filter((value : any) => {return value.status === "BELUM_DIBAYAR"}))
        setInvoiceBaruData(response.data.filter((value : any) => {return value.status === "PESANAN_BARU"}))
      } catch (error) {
        console.log(error)
      }
    }
    auth();
  }, [])

  console.log(invoiceBelumData)

  return (
    <>
      <div>
        <h1 className="font-bold text-xl p-4 ps-8 pt-8">Daftar Pesanan</h1>

        <div className="border-b-2 pr-3 pl-3 pb-3">
          <Tabs defaultValue="9" onValueChange={(e) => setStatus(Number(e))}>
            <div className="flex justify-center">
              <ScrollArea className=" whitespace-nowrap rounded-md border">
                <TabsList className="bg-white">
                  <TabsTrigger value="9">
                    <div className="bg-blue-800 text-white w-6 h-6 rounded-full text-center leading-6 mr-1">
                      {invoiceData.length}
                    </div>
                    <p>Semua</p>
                  </TabsTrigger>
                  <TabsTrigger value="0">
                    {invoiceBelumData && <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      {invoiceBelumData.length}
                    </div>}
                    <p>Belum Dibayar</p>
                  </TabsTrigger>
                  <TabsTrigger value="1">
                    {invoiceBaruData &&  <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      {invoiceBaruData.length}
                    </div>}
                    <p>Pesanan Baru</p>
                  </TabsTrigger>
                  <TabsTrigger value="2">
                    {/* <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      1
                    </div> */}
                    <p>Siap Dikirim</p>
                  </TabsTrigger>
                  <TabsTrigger value="3">
                    {/* <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      1
                    </div> */}
                    <p>Dalam Pengiriman</p>
                  </TabsTrigger>
                  <TabsTrigger value="4">
                    <p>Pesanan Selesai</p>
                  </TabsTrigger>
                  <TabsTrigger value="5">
                    <p>Dibatalkan</p>
                  </TabsTrigger>
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            <div className="p-3">
              <form>
                <div className="flex gap-3 justify-between">
                  <Input type="text" placeholder="Cari Pesanan" />
                  <DropdownKurir />
                  <DropdownUrutan />
                </div>
              </form>
            </div>

            <TabsContent value="9">
              {invoiceBelumData && invoiceBelumData.map((value) =>(
                <BelumDibayar invoice={value}/>
              )
              )}

              {invoiceBaruData && invoiceBaruData.map((value) =>(
                <PesananBaru invoice={value}/>
              )
              )}

              {/* <PesananBaru />
              <SiapDikirim />
              <DalamPengiriman />
              <PesananSelesai />
              <Dibatalkan /> */}
            </TabsContent>
            <TabsContent value="0">
            {invoiceBelumData && invoiceBelumData.map((value) =>(
                <BelumDibayar invoice={value}/>
              )
              )}
            </TabsContent>
            <TabsContent value="1">
            {invoiceBaruData && invoiceBaruData.map((value) =>(
                <PesananBaru invoice={value}/>
              )
              )}
            </TabsContent>
            <TabsContent value="2">
            {invoiceData && invoiceData.map((value) =>(
                <SiapDikirim invoice={value}/>
              )
              )}
            </TabsContent>
            <TabsContent value="3">
            {invoiceData && invoiceData.map((value) =>(
                <DalamPengiriman invoice={value}/>
              )
              )}
            </TabsContent>
            <TabsContent value="4">
            {invoiceData && invoiceData.map((value) =>(
                <PesananSelesai invoice={value}/>
              )
              )}
            </TabsContent>
            <TabsContent value="5">
            {invoiceData && invoiceData.map((value) =>(
                <Dibatalkan invoice={value}/>
              )
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
