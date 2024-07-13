import { Link } from "@tanstack/react-router";
import { FiBox } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion";

import { BsPerson, BsPersonBadge } from "react-icons/bs";
import useStore from "@/z-context";

export function SideBar() {
  // const user = useStore((state) => state.user);
  // console.log("test context =",user);
  const logOutUser = useStore((state) => state.logout);
  return (
    <>
      <div className="bg-stone-100 w-52 h-screen">
        <ul>
          <div className="text-xl pl-5 h-screen flex flex-col justify-between">
          <div>
            {/* <h1 className="font-bold ms-4 mt-4 text-2xl text-orange-500">Lakoe App</h1> */}
            <img src="/Lakoe.png" className="w-32 mt-2"/>
            <div className="mt-2">
              <li>
                <Link
                  to="/seller/dashboard"
                  className="[&.active]:font-bold flex gap-2 items-center py-3"
                >
                  <GoHome /> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/seller/pesanan"
                  className="[&.active]:font-bold flex gap-2 items-center pb-3"
                >
                  <FiBox /> Pesanan
                </Link>
              </li>
              <li>
                <Link
                  to="/seller/produk"
                  className="[&.active]:font-bold flex gap-2 items-center pb-3"
                >
                  <MdOutlineShoppingBag /> Produk
                </Link>
              </li>
              <li>
              <Link
                      to="/seller/atur-toko"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                      <IoSettingsOutline/> Pengaturan
              </Link>
              {/* <Link
                      to="/form-produk"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                       Form-varian
              </Link> */}
              {/* <Accordion type="single" className="border-none" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="p-0">
                      <IoSettingsOutline/>Pengaturan</AccordionTrigger>
                    <AccordionContent className="mt-2 p-0 ms-7">
                    <Link
                      to="/atur-toko"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                      Atur Toko
                    </Link>
                    </AccordionContent>
                    <AccordionContent className="m-0 p-0 ms-7">
                    <Link
                      to="/pengiriman"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                      Pengiriman
                    </Link>
                    </AccordionContent>
                    <AccordionContent className="m-0 p-0 ms-7">
                    <Link
                      to="/metode"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                      Metode Pembayaran
                    </Link>
                    </AccordionContent>
                  </AccordionItem>
                  
                </Accordion> */}
                
              </li>
            </div>
          </div>
            <div className="mb-5">
              <li>
                <Link
                  to="/auth/login"
                  className="[&.active]:font-bold flex gap-2 items-center"
                  onClick={logOutUser}
                >
                 <BsPerson/> Logout
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
