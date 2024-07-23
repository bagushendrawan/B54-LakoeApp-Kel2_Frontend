import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { api } from "@/lib/api";
import { Route } from "@/routes/buyer/add-cart";
import { Link, Navigate, useNavigate } from "@tanstack/react-router";
import Axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { TableCart } from "./table-cart";

interface Data {
  id: number;
  name: string;
  price: number;
  attachments: string[];
}

interface cartItemsForm {
  attachments: string[];
  name: string;
  price: number;
  quantity: Number;
  stock: Number;
}

type paramsCart = {
  product_id: string;
  varian_id: string;
};

export function AddCartPage() {
  // const formAddCart = useForm<cartItemsForm>()
  const navigate = useNavigate();
  const params: paramsCart = Route.useSearch();
  console.log("params", params);

  const [dataOrder, setDataOrder] = useState<cartItemsForm>({
    attachments: [],
    name: "",
    price: 0,
    quantity: 0,
    stock: 0,
  });

  const [quantity, setQuantity] = useState<Number>(0);
  const [dataCart, setDataCart] = useState<any>([]);

  useEffect(() => {
    async function fetchVarian() {
      try {
        const response = await Axios({
          method: "get",
          url: `${api}/form-produk/${params.product_id}/${params.varian_id}`,
          data: dataOrder,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = {
          attachments: response.data.attachments,
          name: response.data.name,
          price:
            response.data.variants[0].variant_option[0].variant_option_values
              .price,
          quantity: response.data.minimum_order,
          stock:
            response.data.variants[0].variant_option[0].variant_option_values
              .stock,
        };
        setQuantity(data.quantity);
        setDataOrder(data);
        // console.log("ini data order", data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVarian();
  }, []);

  async function addCart() {
    try {
      console.log("hit add");
      const data = {
        // store_id = params.store_id
        attachments: dataOrder.attachments,
        name: dataOrder.name,
        price: dataOrder.price,
        quantity: quantity,
      };

      const response = await Axios({
        method: "post",
        url: `${api}/cart-items/${params.product_id}/${params.varian_id}`,
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("ini data post", response.data);
      setDataCart(data);
      navigate({ to: "/buyer/dashboard" });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-white m-3 rounded-lg h-screen ">
      <div className="p-5 flex justify-end">
        <TableCart />
      </div>

      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {dataOrder.attachments.map((data, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={data} alt="" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="ml-52">
            <h1 className="font-bold text-2xl">{dataOrder.name}</h1>

            <div className="mt-5">
              <div className="flex gap-10 text-xl pb-4 border-b-2 border-b-black">
                <p>Harga</p>
                <p>{dataOrder.price}</p>
              </div>

              <div className="flex items-center gap-10 mt-5 text-xl pb-4 border-b-2 border-b-black">
                <p>Jumlah</p>
                <div className="flex items-center gap-10 text-xl">
                  {quantity <= dataOrder.quantity ? (
                    <button
                      className="border border-black w-10 h-11 rounded-md hidden"
                      disabled
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className="border border-black w-10 h-11 rounded-md"
                      onClick={() => {
                        setQuantity(Number(quantity) - 1);
                      }}
                    >
                      -
                    </button>
                  )}

                  <p>{String(quantity)}</p>
                  {quantity >= dataOrder.stock ? (
                    <button
                      className="border border-black w-10 h-11 rounded-md hidden"
                      disabled
                    >
                      +
                    </button>
                  ) : (
                    <button
                      className="border border-black w-10 h-11 rounded-md"
                      onClick={() => {
                        setQuantity(Number(quantity) + 1);
                      }}
                    >
                      +
                    </button>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <Button>
                  {/* <Link to="/buyer/checkout" onClick={() => addCart()} search={{id: dataCart.id}}>
                    Beli Langsung
                  </Link> */}
                </Button>
                <Link className="gap-2" onClick={addCart} to="/buyer/dashboard">
                  Keranjang <FaArrowRightFromBracket />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
