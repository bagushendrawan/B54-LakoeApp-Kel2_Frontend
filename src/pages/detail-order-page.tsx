import { DetailPembayaran } from "@/features/pesanan/components/detail-order/detail-pembayaran";
import { DetailPengiriman } from "@/features/pesanan/components/detail-order/detail-pengiriman";
import { DetailProduk } from "@/features/pesanan/components/detail-order/detail-produk";
import { InfoOrder } from "@/features/pesanan/components/detail-order/info-order";
import { StatusOrder } from "@/features/pesanan/components/detail-order/status-order";
import { SubmitOrder } from "@/features/pesanan/components/detail-order/submit-order";
import { RightBar } from "@/features/right-bar";
import { SideBar } from "@/features/side-bar";
import { IoIosArrowForward } from "react-icons/io";

export function DetailOrderPage() {
  return (
    <>
      <div className="flex">
        <div>
          <SideBar />
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-blue-500 text-l p-3 pr-0">
              Daftar Pesanan
            </h1>{" "}
            <IoIosArrowForward />
            <h1 className="font-bold">T-SHIRT BASIC - BLACK WHITE</h1>
          </div>

          <div className="mx-4 bg-white rounded-lg">
            <div className="flex">
              <StatusOrder />
            </div>
          </div>

          <div className="m-4 bg-white rounded-lg">
            <InfoOrder />
          </div>

          <div className="m-4 bg-white rounded-lg">
            <div className="flex">
              <DetailProduk />
            </div>
          </div>

          <div className="m-4 bg-white rounded-lg">
            <div className="flex">
              <DetailPengiriman />
            </div>
          </div>

          <div className="m-4 bg-white rounded-lg">
            <div className="flex">
              <DetailPembayaran />
            </div>
          </div>

          <div className="m-4 bg-white rounded-lg">
              <SubmitOrder />
          </div>
        </div>

        <div>
          <RightBar />
        </div>
      </div>
    </>
  );
}
