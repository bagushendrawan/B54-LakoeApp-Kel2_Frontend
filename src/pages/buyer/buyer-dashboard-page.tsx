import { TableCart } from "@/buyer/pages/table-cart";
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
import { ChangeEvent, useEffect, useState } from "react";

interface VariantOptionValue {
  sku: string;
  weight: number;
  stock: number;
  price: number;
}

interface VariantOption {
  name: string;
  variant_option_values: VariantOptionValue;
}

interface Variant {
  id: string;
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
  const [selectedVariant, setSelectedVariant] = useState<String>("");

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

  const [searchTerm, setSearchTerm] = useState('')

  const filteredByName = product.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  useEffect(() => {

    getDataProduct();
  }, []);

  return (
    <>
      <div className="bg-white m-3 rounded-lg h-screen">
        <div className="flex justify-between items-center font-bold p-4 border-b-2 border-b-black bg-rose-600">
          <h1 className="font-extrabold text-2xl text-white">LAKOEBUYER</h1>
          <h1 className="text-xl text-white">Daftar Produk</h1>
          <TableCart />
        </div>

        <div className="flex gap-3 p-3  bg-slate-800">
          <Input type="text" value={searchTerm} placeholder="Cari Pesanan" onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} />

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

        <div className="flex flex-wrap justify-center gap-4 p-3 rounded-lg">
          {filteredByName.map((data) => {
            return (
              <>
                <Card className="w-1/6 border-rose-600">
                  <CardContent className="p-3 border-b border-b-rose-600">
                    <div>
                      <h1 className="mb-2 flex justify-center">{data?.store_id}</h1>
                    </div>
                    <div>
                      <img
                        src={data?.attachments[0]}
                        alt="gambar"
                        className="rounded-lg w-full h-52 object-cover object-center"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col p-3">
                    <h1 className="font-bold text mb-2">{data?.name}</h1>
                    <Select onValueChange={(e) => setSelectedVariant(e)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue
                          placeholder="Varian"
                          defaultValue={data.variants[0].id}
                        />
                      </SelectTrigger>
                      <SelectContent side="top">
                        <SelectGroup>
                          {data.variants?.map((value) => {
                            return (
                              <SelectItem key={value.id} value={value.id}>
                                {value.variant_option[0].name}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <p className="my-2 font-bold">
                      Rp{" "}
                      {
                        data?.variants[0].variant_option[0]
                          .variant_option_values.price
                      }
                    </p>
                    <Button>
                      {" "}
                      <Link
                        to="/buyer/add-cart"
                        search={{
                          product_id: data.id,
                          varian_id: selectedVariant,
                        }}
                      >
                        Beli Sekarang
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
