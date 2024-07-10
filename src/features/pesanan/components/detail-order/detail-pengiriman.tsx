import { FaRegCopy } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

export function DetailPengiriman() {
  return (
    <>
      <div className="py-4 px-3 text-2xl">
        <TbTruckDelivery />
      </div>

      <div className="w-full">
        <p className="font-bold mt-4">Detail Pengiriman</p>

        <div className="pb-3">
          <div className="flex">
            <p className="w-60">Kurir</p>
            <p>J&T Reguler</p>
          </div>

          <div className="flex">
            <p className="w-60 flex gap-2 items-center">
              No. Resi <FaRegCopy />
            </p>
            <p>-</p>
          </div>

          <div className="flex">
            <p className="w-60">
              <div className="flex gap-2 items-center">
                Alamat <FaRegCopy />
              </div>
            </p>
            <div>
              <p>Karang Semut, Trimulya, Jetis, Bantul, Yogyakarta</p>
              <p>085798324931</p>
              <p>Agik Gigih Sulistyo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
