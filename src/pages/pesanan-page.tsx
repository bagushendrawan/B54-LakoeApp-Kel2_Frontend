import { DaftarPesanan } from "@/features/pesanan/components/status-order/daftar-pesanan";
import { RightBar } from "@/features/right-bar";
import { SideBar } from "@/features/side-bar";

export function PesananPage() {
  return (
    <>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="m-4 bg-white rounded-lg">
          <DaftarPesanan />
        </div>
        <div>
          <RightBar />
        </div>
      </div>
    </>
  );
}
