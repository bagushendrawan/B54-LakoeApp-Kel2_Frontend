import { DaftarPesanan } from "@/features/pesanan/components/status-order/daftar-pesanan";
import { RightBar } from "@/features/right-bar";
import { SideBar } from "@/features/side-bar";

export function PesananPage() {
  return (
    <>
      <div className="flex w-full">
        <div className="m-4 bg-white rounded-lg w-full">
          <DaftarPesanan />
        </div>
      </div>
    </>
  );
}
