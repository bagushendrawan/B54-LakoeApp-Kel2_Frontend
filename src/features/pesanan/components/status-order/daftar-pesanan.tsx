import { Input } from "@/components/ui/input";
import {
  BelumDibayar,
  DalamPengiriman,
  Dibatalkan,
  PesananBaru,
  PesananSelesai,
  Semua,
  SiapDikirim,
} from "./card-pesanan";
import { DropdownKurir } from "./dropdown-kurir";
import { DropdownUrutan } from "./dropdown-urutan";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import Axios from "axios"
import { useQuery } from "@tanstack/react-query";
import useStore from "@/z-context";

export function DaftarPesanan() {
  const token = localStorage.getItem("token")
  const [invoiceData, setInvoiceData] = useState<any[]>([]);
  const [invoiceOriData, setInvoiceOriData] = useState<any[]>([]);
  const [invoiceBelumData, setInvoiceBelumData] = useState<any[]>([]);
  const [invoiceBaruData, setInvoiceBaruData] = useState<any[]>([]);
  const [invoiceSiapDikirimData, setInvoiceSiapDikirimData] = useState<any[]>([]);
  const [invoiceDalamKirimData, setInvoiceDalamKirimData] = useState<any[]>([]);
  const [invoiceSelesaiData, setInvoiceSelesaiData] = useState<any[]>([]);
  const [invoiceBatalData, setInvoiceBatalData] = useState<any[]>([]);
  const [searced, setSearched] = useState([]);
  const [searchPesanan, setSearchPesanan] = useState("");

  const user = useStore((state) => state.user)
  //9 == all
  const [status, setStatus] = useState(9);
  useEffect(() => {
    async function auth() {
      try {
        const response = await Axios({
          method: "get",
          url: `http://localhost:3000/form-produk/pesanan/${user.store_id}/9`,
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
        setInvoiceData(response.data)
        setInvoiceOriData(response.data)

        setInvoiceBelumData(response.data.filter((value : any) => {return value.status === "BELUM_DIBAYAR"}))
        setInvoiceBaruData(response.data.filter((value : any) => {return value.status === "PESANAN_BARU"}))
        setInvoiceSiapDikirimData(response.data.filter((value : any) => {return value.status === "SIAP_DIKIRIM"}))
        setInvoiceDalamKirimData(response.data.filter((value : any) => {return value.status === "DALAM_PENGIRIMAN"}))
        setInvoiceSelesaiData(response.data.filter((value : any) => {return value.status === "PESANAN_SELESAI"}))
        setInvoiceBatalData(response.data.filter((value : any) => {return value.status === "DIBATALKAN"}))
        
        if(searchPesanan)
        {
          const filteredInvoiceData = invoiceData
          .filter((value: any) => 
              value.cart.carts_items.some((item: any) => 
                  item.name.toLowerCase().includes(searchPesanan.toLowerCase())
              )
          )
          .map((value: any) => ({
              ...value,
              cart: {
                  ...value.cart,
                  carts_items: value.cart.carts_items.filter((item: any) =>
                      item.name.toLowerCase().includes(searchPesanan.toLowerCase())
                  )
              }
          }));
          setInvoiceData(filteredInvoiceData)
          setInvoiceBelumData(invoiceData.filter((value : any) => {return value.status === "BELUM_DIBAYAR"}))
          setInvoiceBaruData(invoiceData.filter((value : any) => {return value.status === "PESANAN_BARU"}))
          setInvoiceSiapDikirimData(invoiceData.filter((value : any) => {return value.status === "SIAP_DIKIRIM"}))
          setInvoiceDalamKirimData(invoiceData.filter((value : any) => {return value.status === "DALAM_PENGIRIMAN"}))
          setInvoiceSelesaiData(invoiceData.filter((value : any) => {return value.status === "PESANAN_SELESAI"}))
          setInvoiceBaruData(invoiceData.filter((value : any) => {return value.status === "DIBATALKAN"}))
          
        }
      } catch (error) {
        console.log(error)
      }
    }
    auth();
  }, [searchPesanan])
  
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
                      {invoiceOriData.length}
                    </div>
                    <p>Semua</p>
                  </TabsTrigger>
                  <TabsTrigger value="0">
                    {invoiceBelumData && <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      {(invoiceOriData.filter((value : any) => {return value.status === "BELUM_DIBAYAR"})).length}
                    </div>}
                    <p>Belum Dibayar</p>
                  </TabsTrigger>
                  <TabsTrigger value="1">
                    {invoiceBaruData &&  <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      {(invoiceOriData.filter((value : any) => {return value.status === "PESANAN_BARU"})).length}
                    </div>}
                    <p>Pesanan Baru</p>
                  </TabsTrigger>
                  <TabsTrigger value="2">
                  {invoiceSiapDikirimData &&  <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                    {(invoiceOriData.filter((value : any) => {return value.status === "SIAP_DIKIRIM"})).length}
                  </div>}
                    <p>Siap Dikirim</p>
                  </TabsTrigger>
                  <TabsTrigger value="3">
                  {invoiceDalamKirimData &&  <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                    {(invoiceOriData.filter((value : any) => {return value.status === "DALAM_PENGIRIMAN"})).length}
                  </div>}
                    <p>Dalam Pengiriman</p>
                  </TabsTrigger>
                  <TabsTrigger value="4">
                  {invoiceSelesaiData &&  <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                    {(invoiceOriData.filter((value : any) => {return value.status === "PESANAN_SELESAI"})).length}
                  </div>}
                    <p>Pesanan Selesai</p>
                  </TabsTrigger>
                  <TabsTrigger value="5">
                  {invoiceBatalData &&  <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                    {(invoiceOriData.filter((value : any) => {return value.status === "DIBATALKAN"})).length}
                  </div>}
                    <p>Dibatalkan</p>
                  </TabsTrigger>
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            <div className="p-3">
              <form>
                <div className="flex gap-3 justify-between">
                  <Input type="text" placeholder="Cari Pesanan" onChange={(e) => setSearchPesanan(e.target.value)} />
                  <DropdownKurir />
                  <DropdownUrutan />
                </div>
              </form>
            </div>

            <TabsContent value="9">
              
              {invoiceData && invoiceData.map((value : any) => {
                return value.cart.carts_items.map((carts_item : any) => (<Semua invoice={value} items={carts_item}/>))
              }
              )}

              {/* <PesananBaru />
              <SiapDikirim />
              <DalamPengiriman />
              <PesananSelesai />
              <Dibatalkan /> */}
            </TabsContent>
            <TabsContent value="0">
            {invoiceBelumData && invoiceBelumData.map((value : any) => {
                return value.cart.carts_items.map((carts_item : any) => (<BelumDibayar invoice={value} items={carts_item}/>))
              }
              )}
            </TabsContent>
            <TabsContent value="1">
            {invoiceBaruData && invoiceBaruData.map((value : any) => {
                 return value.cart.carts_items.map((carts_item : any) => (<PesananBaru invoice={value} items={carts_item}/>))
              }
              )}
            </TabsContent>
            <TabsContent value="2">
            {invoiceSiapDikirimData && invoiceSiapDikirimData.map((value : any) =>{
                 return value.cart.carts_items.map((carts_item : any) => (<SiapDikirim invoice={value} items={carts_item}/>))
              }
              )}
            </TabsContent>
            <TabsContent value="3">
            {invoiceDalamKirimData && invoiceDalamKirimData.map((value : any) =>{
                 return value.cart.carts_items.map((carts_item : any) => (<DalamPengiriman invoice={value} items={carts_item}/>))
              }
              )}
            </TabsContent>
            <TabsContent value="4">
            {invoiceSelesaiData && invoiceSelesaiData.map((value : any) =>{
                 return value.cart.carts_items.map((carts_item : any) => (<PesananSelesai invoice={value} items={carts_item}/>))
              }
              )}
            </TabsContent>
            <TabsContent value="5">
            {invoiceBatalData && invoiceBatalData.map((value : any) =>{
                 return value.cart.carts_items.map((carts_item : any) => (<Dibatalkan invoice={value} items={carts_item}/>))
              }
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
