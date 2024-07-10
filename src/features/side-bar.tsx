import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { Link } from "@tanstack/react-router";
import { CgProfile } from "react-icons/cg";
import { FiBox } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion"

import { BsPersonBadge } from "react-icons/bs";

export function SideBar() {
  return (
    <>
      <div className="bg-white w-60 h-screen">
        <ul>
          <div className="text-xl pl-5 h-screen flex flex-col justify-between">
            <div className="mt-5">
              <li>
                <Link
                  to="/"
                  className="[&.active]:font-bold flex gap-2 items-center py-3"
                >
                  <GoHome /> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/pesanan"
                  className="[&.active]:font-bold flex gap-2 items-center pb-3"
                >
                  <FiBox /> Pesanan
                </Link>
              </li>
              <li>
                <Link
                  to="/produk"
                  className="[&.active]:font-bold flex gap-2 items-center pb-3"
                >
                  <MdOutlineShoppingBag /> Produk
                </Link>
              </li>
              <li>
              <Accordion type="single" className="border-none" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="p-0"><IoSettingsOutline/>Pengaturan</AccordionTrigger>
                    <AccordionContent className="mt-2 p-0 ms-7">
                    <Link
                      to="/pengaturan"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                      Pengaturan
                    </Link>
                    </AccordionContent>
                    <AccordionContent className="m-0 p-0 ms-7">
                    <Link
                      to="/pengaturan"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                      Atur Toko
                    </Link>
                    </AccordionContent>
                    <AccordionContent className="m-0 p-0 ms-7">
                    <Link
                      to="/pengaturan"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                      Metode Pembayaran
                    </Link>
                    </AccordionContent>
                  </AccordionItem>
                  
                </Accordion>
                
              </li>
            </div>

            <div className="mb-5">
              <li>
                <Link
                  to="/profile"
                  className="[&.active]:font-bold flex gap-2 items-center"
                >
                 <BsPersonBadge/> Profile
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
