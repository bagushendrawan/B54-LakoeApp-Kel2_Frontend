import { IoWalletOutline } from "react-icons/io5";

export function DetailPembayaran() {
  return (
    <>
      <div className="py-4 px-3 text-2xl">
        <IoWalletOutline />
      </div>

      <div className="w-full">
        <p className="font-bold mt-4">Rincian Pembayaran</p>

        <div className="mb-2 pb-2 mr-5 border-b-2">
          <div className="flex justify-between">
            <p>Total Harga (1 Barang)</p>
            <p>Rp 190.000</p>
          </div>

          <div className="flex justify-between">
            <p>Total Ongkos Kirim (10Kg)</p>
            <p>Rp 20.000</p>
          </div>

          <div className="flex justify-between">
            <p>Diskon</p>
            <p>-</p>
          </div>

          <div className="flex justify-between">
            <p>Biaya Layanan</p>
            <p>-</p>
          </div>
        </div>

        <div className="flex justify-between mb-2 pb-2 mr-5">
          <p className="font-bold">Rincian Pembayaran</p>
          <p className="font-bold">Rp 210.000</p>
        </div>
      </div>
    </>
  );
}
