import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { HiOutlineClipboardList } from "react-icons/hi";

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
          <Select>
            <SelectTrigger className="border p-1 rounded-md">
              <SelectValue placeholder="Lihat Riwayat Pesanan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="haha">haha</SelectItem>
              <SelectItem value="hehe">hehe</SelectItem>
              <SelectItem value="hihi">hihi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        </>
    )
}