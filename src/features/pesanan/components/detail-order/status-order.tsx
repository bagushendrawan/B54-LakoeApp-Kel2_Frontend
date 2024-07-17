import { Button } from "@/components/ui/button";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiwayatPesanan } from "./riwayat-pesanan";

export function StatusOrder() {
  

  return (
    <>
      <div className="py-4 px-3 text-2xl">
        <HiOutlineClipboardList />
      </div>
      <div className="p-3 pl-0">
        <Button size="sm" className="bg-yellow-500 rounded-sm">
          Belum Dibayar
        </Button>
        <p className="my-2">
          Pesanan akan dibatalkan bila pembayaran tidak dilakukan sampai 10
          Agustus 2024 - 00:00 WIB. Silakan tunggu sampai pembayaran
          terkonfirmasi sebelum mengirimkan barang.
        </p>

        <RiwayatPesanan />  
      </div>
    </>
  );
}
