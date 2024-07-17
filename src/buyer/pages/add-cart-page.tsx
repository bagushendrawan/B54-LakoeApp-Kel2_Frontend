import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Route } from "@/routes/buyer/add-cart";
import { useNavigate } from "@tanstack/react-router";
import Axios from "axios";
import { useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

interface Data {
  id: number;
  name: string;
  price: number;
  image: string[];
}

const datas: Data = {
  id: 1,
  name: "BAJU POLOS",
  price: 120000,
  image: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYBcR8lwHq-b82E_vCRw02NKJVbsTAJu9dw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYBcR8lwHq-b82E_vCRw02NKJVbsTAJu9dw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYBcR8lwHq-b82E_vCRw02NKJVbsTAJu9dw&s",
  ],
};

interface cartItemsForm {
  name: string;
  price: number;
  quantity: number;
}

export function AddCartPage() {

  const params = Route.useSearch();
  console.log("params", params);

  const [dataOrder, setDataOrder] = useState<cartItemsForm>({
    name: "",
    price: 0,
    quantity: 1,
  });

  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;

    setDataOrder({
      ...dataOrder,
      [name]: value,
    });
  }

  async function handleSubmit() {
    try {
      const response = await Axios({
        method: "post",
        url: `http://localhost:3000/cart-items`,
        data: dataOrder,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      });

      setDataOrder(response.data)
      console.log(dataOrder);
      
      navigate({ to: "/buyer/checkout", search: { dataOrder } });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="bg-white m-3 rounded-lg h-screen flex justify-center">
        <div className="flex items-center">
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {datas.image.map((data, index) => (
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
                  <button className="border border-black w-10 h-11 rounded-md">
                    -
                  </button>
                  <p>{dataOrder.quantity}</p>
                  <button className="border border-black w-10 h-11 rounded-md">
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <Button onClick={handleSubmit}>
                  {/* <Link to="/buyer/checkout" search={{ id: 2 }}>
                    Beli Langsung
                  </Link> */}
                  Beli Langsung
                </Button>
                <Button
                  className="gap-2"
                  onClick={() => {
                    alert("Produk sudah ditambahkan kedalam keranjang!");
                  }}
                >
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
