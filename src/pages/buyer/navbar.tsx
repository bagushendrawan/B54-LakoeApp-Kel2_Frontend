import { TableCart } from "@/buyer/pages/table-cart";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import useStore from "@/z-context";
import { Link } from "@tanstack/react-router";
import { BsPerson } from "react-icons/bs";

export function Navbar() {
  const logOutUser = useStore((state) => state.logout);
  return (
    <div className="fixed right-0 left-0 top-0 z-50 flex justify-between items-center font-bold p-2 px-10 drop-shadow-sm shadow-black bg-[#28DF99]">
      <Link to="/buyer/dashboard">
        <h1 className="font-extrabold text-2xl text-white">LAKOEBUYER</h1>
      </Link>
      {/* <h1 className="text-xl text-white">Daftar Produk</h1> */}

      <div className="flex items-center gap-4">
        <TableCart />

        <Dialog>
          <DialogTrigger asChild>
            <div className="w-5/6 rounded-full p-1 cursor-pointer border border-black bg-white">
              <p className="font-bold text-3xl text-black">
                <BsPerson />
              </p>
            </div>
          </DialogTrigger>
          <DialogContent className="text-sm">
            <DialogHeader className="border-b-2 py-3">
              <DialogTitle>My Profile</DialogTitle>
            </DialogHeader>

            <div className="flex gap-5">
              <p className="font-bold text-xl mb-1">Nama Saya</p>
            </div>

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
      </div>
    </div>
  );
}
