import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/carousel";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Axios from "axios";
import { useEffect, useState } from "react";
import useStore from "@/z-context";

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

export function PreviewHalaman(props: any) {
  const product = useStore((state) => state.produk);

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
        console.log("product", product);
        const response = await Axios({
          method: "get",
          url: `http://localhost:3000/form-produk/3ada8b98-d033-4dc0-8ccd-05fb7d132bb1/17415d35-170c-4f13-8519-4928e519637e`,
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
        console.log("ini data order", data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVarian();
  }, []);

  async function addCart() {
    try {
      const data = {
        // store_id = params.store_id
        attachments: dataOrder.attachments,
        name: dataOrder.name,
        price: dataOrder.price,
        quantity: quantity,
      };

      const response = await Axios({
        method: "post",
        url: `http://localhost:3000/cart-items/17415d35-170c-4f13-8519-4928e519637e`,
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("ini data post", response.data);
      setDataCart(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="bg-white rounded-lg h-screen flex w-full justify-center items-center">
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
        </div>

        <div>
          <div className="ml-32">
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

              <div className="flex justify-between gap-4 mt-5">
                <Button disabled>
                  {/* <Link to="/buyer/checkout" onClick={() => addCart()} search={{id: dataCart.id}}>
                    Beli Langsung
                  </Link> */}
                </Button>
                <Button className="gap-2" onClick={() => addCart()} disabled>
                  Keranjang <FaArrowRightFromBracket />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
