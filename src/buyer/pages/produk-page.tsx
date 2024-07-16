import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@tanstack/react-router";
import Axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

interface MidtransSnap extends Window {
  snap: {
    pay: (token: string) => void;
  };
}

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

export function ProdukPage() {
  const [data, setData] = useState<cartItemsForm>({
    name: "",
    price: 0,
    quantity: 1,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;

    setData({
      ...data,
      [name]: value,
    });
  }

  async function handleSubmit() {
    try {
      const response = await Axios.post(
        `http://localhost:3000/cart-items`,
        data
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";

    const scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    const myMidtransClientKey = import.meta.env.PUBLIC_CLIENT;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);


  return (
    <>
      <div className="bg-white m-3 rounded-lg">
        <div className="flex items-center p-24">
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

          <div className="ml-24">
            <h1 className="font-bold text-2xl">{datas.name}</h1>

            <div className="mt-5">
              <div className="flex gap-10 text-xl pb-4 border-b-2 border-b-black">
                <p>Harga</p>
                <p>{datas.price}</p>
              </div>

              <div className="flex items-center gap-10 mt-5 text-xl pb-4 border-b-2 border-b-black">
                <p>Jumlah</p>
                <div className="flex items-center gap-10 text-xl">
                  <button className="border border-black w-10 h-11 rounded-md">
                    -
                  </button>
                  <div>{data.quantity}</div>
                  <button className="border border-black w-10 h-11 rounded-md">
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <Button onClick={handleSubmit}>
                  <Link to="/checkout">Beli Langsung</Link>
                </Button>
                <Button
                  className="gap-2"
                  onClick={() => {
                    alert("Produk sudah ditambahkan kedalam keranjang!");
                  }}
                >
                  Keranjang <FaArrowRightFromBracket />
                </Button>
                <Button
                  onClick={async () => {
                    const response = await Axios.post(
                      "http://localhost:3000/payment"
                    );
                    console.log(response);
                    
                    const token = response.data.token;
                    (window as unknown as MidtransSnap).snap.pay(token);
                  }}
                >
                  Link Generate
                </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
