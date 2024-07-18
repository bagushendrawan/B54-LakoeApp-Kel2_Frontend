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

export function DaftarPesanan() {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl p-4 ps-8 pt-8">Daftar Pesanan</h1>

        <div className="border-b-2 pr-3 pl-3 pb-3">
          <Tabs>
            <div className="flex justify-center">
              <ScrollArea className=" whitespace-nowrap rounded-md border">
                <TabsList className="bg-white">
                  <TabsTrigger value="semua">
                    <div className="bg-blue-800 text-white w-6 h-6 rounded-full text-center leading-6 mr-1">
                      1
                    </div>
                    <p>Semua</p>
                  </TabsTrigger>
                  <TabsTrigger value="belum dibayar">
                    <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      1
                    </div>
                    <p>Belum Dibayar</p>
                  </TabsTrigger>
                  <TabsTrigger value="pesanan baru">
                    <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      1
                    </div>
                    <p>Pesanan Baru</p>
                  </TabsTrigger>
                  <TabsTrigger value="siap dikirim">
                    <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      1
                    </div>
                    <p>Siap Dikirim</p>
                  </TabsTrigger>
                  <TabsTrigger value="dalam pengiriman">
                    <div className="bg-blue-800 text-white w-6 h-6 rounded-full leading-6 mr-1">
                      1
                    </div>
                    <p>Dalam Pengiriman</p>
                  </TabsTrigger>
                  <TabsTrigger value="pesanan selesai">
                    <p>Pesanan Selesai</p>
                  </TabsTrigger>
                  <TabsTrigger value="dibatalkan">
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
