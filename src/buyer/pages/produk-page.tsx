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
import { useState } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";

interface Data {
  nama: string;
  image: string[];
}

const datas: Data = {
  nama: "BAJU POLOS",
  image: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYBcR8lwHq-b82E_vCRw02NKJVbsTAJu9dw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYBcR8lwHq-b82E_vCRw02NKJVbsTAJu9dw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYBcR8lwHq-b82E_vCRw02NKJVbsTAJu9dw&s",
  ],
};

export function ProdukPage() {
  const [data, setData] = useState<number>(1);

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
            <h1 className="font-bold text-2xl">{datas.nama}</h1>

            <div className="mt-5">
              <div className="flex gap-10 text-xl pb-4 border-b-2 border-b-black">
                <p>Harga</p>
                <p>Rp 100.000</p>
              </div>

              <div className="flex items-center gap-10 mt-5 text-xl pb-4 border-b-2 border-b-black">
                <p>Jumlah</p>
                <div className="flex items-center gap-10 text-xl">
                  <button
                    className="border border-black w-10 h-11 rounded-md"
                    onClick={() => setData((prev) => prev - 1)}
                  >
                    -
                  </button>
                  <div>{data}</div>
                  <button
                    className="border border-black w-10 h-11 rounded-md"
                    onClick={() => setData((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between mt-5">
                <Button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
