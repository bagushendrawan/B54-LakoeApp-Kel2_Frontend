import { Input } from "@/components/ui/input";
import { BelumDibayar, DalamPengiriman, Dibatalkan, PesananBaru, PesananSelesai, SiapDikirim } from "./card-pesanan";
import { DropdownKurir } from "./dropdown-kurir";
import { DropdownUrutan } from "./dropdown-urutan";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function DaftarPesanan() {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl p-3">Daftar Pesanan</h1>

        <div className="border-b-2 pr-3 pl-3 pb-3">
          <Tabs>
            <div className="flex justify-center">
            <ScrollArea className="w-[660px] whitespace-nowrap rounded-md border">
              <TabsList className="bg-white">
                <TabsTrigger value="semua">Semua</TabsTrigger>
                <TabsTrigger value="belum dibayar">Belum Dibayar</TabsTrigger>
                <TabsTrigger value="pesanan baru">Pesanan Baru</TabsTrigger>
                <TabsTrigger value="siap dikirim">Siap Dikirim</TabsTrigger>
                <TabsTrigger value="dalam pengiriman">Dalam Pengiriman</TabsTrigger>
                <TabsTrigger value="pesanan selesai">Pesanan Selesai</TabsTrigger>
                <TabsTrigger value="dibatalkan">Dibatalkan</TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            </div>

            <div className="p-3">
              <form>
                <div className="flex gap-3 justify-between">
                  <Input
                    type="text"
                    placeholder="Cari Pesanan"
                    className="w-60"
                  />
                  <DropdownKurir />
                  <DropdownUrutan />
                </div>
              </form>
            </div>

            <TabsContent value="semua">
              <BelumDibayar />
              <PesananBaru />
              <SiapDikirim />
              <DalamPengiriman />
              <PesananSelesai />
              <Dibatalkan />
            </TabsContent>
            <TabsContent value="belum dibayar">
              <BelumDibayar />
            </TabsContent>
            <TabsContent value="pesanan baru">
              <PesananBaru />
            </TabsContent>
            <TabsContent value="siap dikirim">
              <SiapDikirim />
            </TabsContent>
            <TabsContent value="dalam pengiriman">
              <DalamPengiriman />
            </TabsContent>
            <TabsContent value="pesanan selesai">
              <PesananSelesai />
            </TabsContent>
            <TabsContent value="dibatalkan">
              <Dibatalkan />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
