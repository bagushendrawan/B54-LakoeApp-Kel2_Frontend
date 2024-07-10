import { CgProfile } from "react-icons/cg";
import { FiBox } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

export function SideBar() {
  return (
    <>
      <div className="w-60 h-screen">
        <ul>
          <div className="text-2xl pl-5">
            <li className="flex gap-2 items-center py-3">
              <GoHome /> Dashboard
            </li>
            <li className="flex gap-2 items-center pb-3">
              <FiBox /> Pesanan
            </li>
            <li className="flex gap-2 items-center pb-3">
              <MdOutlineShoppingBag /> Produk
            </li>
            <li className="flex gap-2 items-center pb-3">
              <IoSettingsOutline /> Pengarturan
            </li>
            <li className="flex gap-2 items-center">
              <CgProfile /> Profile
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
