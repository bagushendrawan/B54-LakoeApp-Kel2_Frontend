import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
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
        console.log("hey",response.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchItems();
  }, []);

  

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="w-2/12 border border-black bg-slate-800 :hover"
        >
          <Button variant="outline">
            <div className="flex items-center gap-3 text-xl text-white">
              <FaShoppingCart className="text-2xl" /> Keranjang
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

                  <Button className="w-1/4">
                    <Link to="/buyer/checkout" search={{ id : data.id }}>
                      Bayar Sekarang
                    </Link>
                    
                  </Button>
                </div>
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
