import { DaftarPesanan } from "@/features/pesanan/components/status-order/daftar-pesanan";

export function PesananPage() {
  return (
    <>
      <div className="flex w-full">
        <div className="m-4 bg-white rounded-lg w-10/12">
          <DaftarPesanan />
        </div>
      </div>
    </>
  );
}
