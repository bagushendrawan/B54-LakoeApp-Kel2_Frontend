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
  nameVariantOption: string;
  variantOptionValue: VariantOptionValue;
}

interface Variant {
  nameVariant: string;
  variantOption: VariantOption;
}

interface ProductDashboard {
  attachments: string;
  name: string;
  variant: Variant;
  store_id: string;
}

export function BuyerDashboardPage() {
  const [product, setProduct] = useState<ProductDashboard[]>([]);

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
          {product.map((data) => {
            return (
              <Card className="w-1/6">
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
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Varian" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="test">Test</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p>Rp 1200000</p>
                  <Button>
                    {" "}
                    <Link to="/buyer/add-cart" search={{ product }}>
                      Beli Sekarang
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
