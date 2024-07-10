import { DaftarPesanan } from "@/features/pesanan/components/status-order/daftar-pesanan";

export function PesananPage() {
  return (
    <>
      <div className="flex">
        <div className="m-4 bg-white rounded-lg">
          <DaftarPesanan />
        </div>
      </div>
    </>
  );
}
