import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { api } from "@/lib/api";
import { Link } from "@tanstack/react-router";
import Axios from "axios";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export function TableCart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await Axios({
          method: "get",
          url: `${api}/cart-items/allUserCart`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("cart", response.data);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchItems();
    console.log("items", items);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border border-black">
        <Button className="bg-white hover:bg-white">
          <div className=" text-xl text-black">
            <FaShoppingCart className="text-2xl" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[500px]">
        <DropdownMenuLabel>List Cart Item</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {items &&
          items
            .filter((data: any) => !data?.invoices)
            .map((data: any, index) => {
              return (
                <DropdownMenuCheckboxItem key={index}>
                  <div className="w-full mt-3 flex justify-between items-center">
                    <div className="w-full flex items-center gap-2">
                      <img
                        src={data?.carts_items[0].image}
                        alt="image"
                        className="w-3/12 rounded-sm"
                      />

                      <div className="text-s w-full">
                        <p>{data.carts_items[0].name}</p>
                        <p>{data.carts_items[0].quantity} item (100gr)</p>
                        <p>Rp {data.carts_items[0].price}</p>
                      </div>
                    </div>

                    <Button className="w-1/4">
                      <Link
                        to="/buyer/checkout"
                        search={{ id: data.carts_items[0].id }}
                      >
                        Bayar Sekarang
                      </Link>
                    </Button>
                  </div>
                </DropdownMenuCheckboxItem>
              );
            })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
