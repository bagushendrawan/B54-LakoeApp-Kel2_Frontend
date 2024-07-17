import { Button } from "@/components/button";
import { Card, CardContent, CardFooter } from "@/components/card";
import { Input } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Link } from "@tanstack/react-router";
import Axios from "axios";
import { useEffect, useState } from "react";

interface VariantOptionValue {
  sku: string;
  weight: number;
  stock: number;
  price: number;
}

interface VariantOption {
  name: string;
  variantOptionValue: VariantOptionValue[];
}

interface Variant {
  id : string;
  name: string;
  variant_option: VariantOption[];
}

interface ProductDashboard {
  id: string;
  attachments: string;
  name: string;
  variants: Variant[];
  store_id: string;
}

export function BuyerDashboardPage() {
  const [product, setProduct] = useState<ProductDashboard[]>([]);
  const [selectedVariant, setSelectedVariant] = useState<String>("")

  async function getDataProduct() {
    try {
      const response = await Axios({
        method: "get",
        url: "http://localhost:3000/buyers/products",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setProduct(response.data);
      // console.log("fetchproduk",response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getDataProduct();
  }, []);

  return (
    <>
      <div className="bg-white m-3 rounded-lg h-screen">
        <h1 className="flex justify-center font-bold py-5 border-b-2 border-b-black">
          Daftar Produk
        </h1>

        <div className="flex gap-3 p-3">
          <Input type="text" placeholder="Cari Pesanan" />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gosend">GoSend</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Toko" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paling lama">Paling Lama</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap justify-center gap-4 m-3 p-3 rounded-lg">
          {product.map((data, index) => {
            return (
              <>
              <Card className="w-1/6" key={index}>
                <CardContent className="p-3 border-b">
                  <h1 className="flex justify-center mb-2">{data?.store_id}</h1>
                  <img
                    src={data?.attachments[0]}
                    alt="gambar"
                    className="rounded-lg w-full h-52 object-cover object-center"
                  />
                </CardContent>
                <CardFooter className="flex flex-col p-3">
                  <h1 className="font-bold text">{data?.name}</h1>
                  <Select onValueChange={(e) => setSelectedVariant(e)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Varian" defaultValue={data.variants[0].id} />
                    </SelectTrigger>
                    <SelectContent side="top">
                      <SelectGroup>
                        {data.variants?.map((value) => {
                          return (
                            <SelectItem value={value.id} >{value.variant_option[0].name}</SelectItem>
                          )
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p>Rp 1200000</p>
                  <Button>
                    {" "}
                    <Link to="/buyer/add-cart" search={{ product_id : data.id, varian_id:selectedVariant }}>
                      Beli Sekarang
                    </Link>
                  </Button>
                </CardFooter>
              </Card>


</>
            )
          })}
        </div>
      </div>
    </>
  );
}

