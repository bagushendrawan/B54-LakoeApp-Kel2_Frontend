import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import useStore from "@/z-context";
import { Link } from "@tanstack/react-router";
import Axios from "axios";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface CartItems {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export function TableCart() {
  const [items, setItems] = useState<CartItems[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await Axios({
          method: "get",
          url: `http://localhost:3000/cart-items/all`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setItems(response.data);
        console.log("hey", response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchItems();
  }, []);

  const logOutUser = useStore((state) => state.logout);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border border-black bg-slate-800">
        <Button className="hover:bg-slate-800">
          <div className=" text-xl text-white">
            <FaShoppingCart className="text-2xl" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[500px]">
        <DropdownMenuLabel>List Cart Item</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {items.map((data, index) => {
          return (
            <DropdownMenuCheckboxItem key={index}>
              <div className="w-full mt-3 flex justify-between items-center">
                <div className="w-full flex items-center gap-2">
                  <img
                    src={data.image}
                    alt="image"
                    className="w-3/12 rounded-sm"
                  />

                  <div className="text-s w-full">
                    <p>{data.name}</p>
                    <p>{data.quantity} item (100gr)</p>
                    <p>Rp {data.price}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button>Hapus</Button>
                  <Button>
                    <Link to="/buyer/checkout" search={{ id: data.id }}>
                      Bayar Sekarang
                    </Link>
                  </Button>
                </div>
              </div>
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
