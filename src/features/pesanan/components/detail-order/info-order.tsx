import { CgProfile } from "react-icons/cg";
import { FaRegCalendar, FaRegCopy, FaWhatsapp } from "react-icons/fa6";
import { TbFileInvoice } from "react-icons/tb";

export function InfoOrder() {
  return (
    <>
      <div>
        <div className="flex items-center">
          <div className="py-4 px-3 text-xl">
            <FaRegCalendar />
          </div>
          <div className="w-full mr-5 flex justify-between">
            <p className="font-bold">Tanggal</p>
            <p>9 Agustus 2024 - 19:45 WIB</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="py-4 px-3 text-xl">
            <TbFileInvoice />
          </div>
          <div className="w-full mr-5 flex justify-between">
            <p className="font-bold">Invoice</p>
            <p className="flex gap-2 items-center">
              <FaRegCopy /> INV/20240708/MPL/000004235
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="py-4 px-3 text-xl">
            <CgProfile />
          </div>
          <div className="w-full mr-5 flex justify-between">
            <p className="font-bold">Pembeli</p>
            <p className="flex gap-2 items-center">
              <FaWhatsapp /> Agik Gigih Sulistyo
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
