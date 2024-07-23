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

<<<<<<< HEAD
import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Input } from "@/components/input";
=======
>>>>>>> origin/dev
import useStore from "@/z-context";
import { BsPerson } from "react-icons/bs";

export function SideBar() {
  // const user = useStore((state) => state.user);
  // console.log("test context =",user);
  const logOutUser = useStore((state) => state.logout);

  return (
    <>
      <div className="bg-rose-600 w-64 h-screen">
        <ul>
          <div className="text-xl text-white pl-5 h-screen flex flex-col justify-between">
            <div>
              {/* <h1 className="font-bold ms-4 mt-4 text-2xl text-orange-500">Lakoe App</h1> */}
              <img src="/Lakoe-w.png" className="w-32 mt-2" />
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
                  {/* <Link
                      to="/seller/atur-toko"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                      <IoSettingsOutline/> Pengaturan
              </Link> */}
                  {/* <Link
                      to="/form-produk"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                       Form-varian
              </Link> */}
                  <Accordion type="single" className="border-none" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="p-0">
                        <IoSettingsOutline />
                        Pengaturan
                      </AccordionTrigger>
                      <AccordionContent className="mt-2 p-0 ms-7">
                        <Link
                          to="/seller/pengaturan"
                          className="[&.active]:font-bold flex gap-2 items-center pb-3 text-lg"
                        >
                          Atur Toko
                        </Link>
                      </AccordionContent>
                      <AccordionContent className="m-0 p-0 ms-7">
                        <Link
                          to="/seller/pengiriman"
                          className="[&.active]:font-bold flex gap-2 items-center pb-3 text-lg"
                        >
                          Pengiriman
                        </Link>
                      </AccordionContent>
                      {/* <AccordionContent className="m-0 p-0 ms-7">
                    <Link
                      to="/metode"
                      className="[&.active]:font-bold flex gap-2 items-center pb-3"
                    >
                      Metode Pembayaran
                    </Link>
                    </AccordionContent> */}
                    </AccordionItem>
                  </Accordion>
                </li>
              </div>
            </div>
            <div className="mb-5">
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-5/6 rounded-lg py-3 mb-4 cursor-pointer">
                      <p className="flex gap-2 items-center font-bold">
                        <BsPerson /> Profile
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="text-sm">
                    <DialogHeader className="border-b-2 py-3">
                      <DialogTitle>Profile Store</DialogTitle>
                    </DialogHeader>

                    <div className="flex gap-5">
                      <img
                        src="https://img.freepik.com/free-vector/leaf-maple-icon-logo-design_474888-2154.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721520000&semt=sph"
                        alt="logo"
                        className="w-1/5"
                      />

                      <div>
                        <p className="font-bold text-xl mb-1">Nama Store</p>
                        <p className="font-light italic mb-1">Slogan</p>
                        <p>Alamat</p>
                      </div>
                    </div>

                    <p>Deskripsi toko</p>

                    <Link
                      to="/auth/login"
                      className="[&.active]:font-bold text-lg flex justify-end gap-2 items-center"
                      onClick={logOutUser}
                    >
                      <button className="bg-red-600 px-4 py-1 text-white rounded-lg">
                        Logout
                      </button>
                    </Link>
                  </DialogContent>
                </Dialog>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
