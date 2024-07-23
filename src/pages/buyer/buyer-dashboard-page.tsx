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
import { formattedNumber } from "@/features/pesanan/components/status-order/card-pesanan";
import { api } from "@/lib/api";
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

interface Store {
  id: string;
  name: string;
}

interface ProductDashboard {
  id: string;
  attachments: string;
  name: string;
  variants: Variant[];
  store_id: string;
  store: Store;
}

export function BuyerDashboardPage() {
  const [product, setProduct] = useState<ProductDashboard[]>([]);
  const [category, setCategory] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState<String>("");

  async function getDataProduct() {
    try {
      const response = await Axios({
        method: "get",
        url: `${api}/buyers/products`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const filtered = response.data.filter((data: any) => data.is_active);
      setProduct(filtered);
      console.log("fetchproduk", filtered);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function getCategoryProduct() {
    try {
      const response = await Axios({
        method: "get",
        url: `${api}/categories`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("categ", response.data);
      setCategory(response.data);
      // console.log("fetchproduk",response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const [searchTerm, setSearchTerm] = useState("");

  const filteredByName = product.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    getDataProduct();
    getCategoryProduct();
  }, []);

  return (
    <>
      <div className="bg-white h-screen overflow-y-auto">
        <div className="flex justify-between items-center font-bold p-4 border-b-2 border-b-black bg-rose-600">
          <h1 className="font-extrabold text-2xl text-white">LAKOEBUYER</h1>
          <h1 className="text-xl text-white">Daftar Produk</h1>
          <TableCart />
        </div>

        <div className="flex gap-3 p-3  bg-slate-800">
          <Input
            type="text"
            value={searchTerm}
            placeholder="Cari Pesanan"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              {category &&
                category.map((categ: any) => {
                  return <SelectItem value={categ.id}>{categ.name}</SelectItem>;
                })}
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

        <div className="flex flex-wrap justify-center gap-6 p-3 py-8 rounded-lg">
          {product.map((data: any, index) => {
            return (
              <>
                <Card key={index} className="w-1/6 shadow-md">
                  <CardContent className="p-3">
                    <div>
                      <h1 className="mb-2 flex justify-center font-light italic">
                        {data?.store.name} Store
                      </h1>
                    </div>
                    <div>
                      <img
                        src={data?.attachments[0]}
                        alt="gambar"
                        className="rounded-lg w-full h-52 object-contain"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col">
                    <h1 className="font-normal italic text-xl">{data?.name}</h1>
                    <p className="my-2 font-bold">
                      {formattedNumber(
                        data?.variants[0].variant_option[0]
                          .variant_option_values.price
                      )}
                    </p>
                    <Select
                      defaultValue={data.variants[0].id}
                      onValueChange={(e) => setSelectedVariant(e)}
                    >
                      <SelectTrigger className="w-[180px] mb-4">
                        <SelectValue
                          placeholder="Pilih Varian"
                          defaultValue={data.variants[0].id}
                        />
                      </SelectTrigger>
                      <SelectContent side="top">
                        <SelectGroup>
                          {data.variants
                            ?.filter(
                              (value: any) =>
                                value.variant_option[0].variant_option_values
                                  ?.stock >= data.minimum_order
                            )
                            .map((value: any) => {
                              return (
                                <SelectItem key={value.id} value={value.id}>
                                  {value.variant_option[0].name} - Stok :
                                  {
                                    value.variant_option[0]
                                      .variant_option_values?.stock
                                  }
                                </SelectItem>
                              );
                            })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Button>
                      {" "}
                      <Link
                        to="/buyer/add-cart"
                        search={{
                          product_id: data.id,
                          varian_id: selectedVariant
                            ? selectedVariant
                            : data.variants[0].id,
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
