import { TableCart } from "@/buyer/pages/table-cart";
import { Button } from "@/components/button";
import { Card, CardContent, CardFooter } from "@/components/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Input } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
<<<<<<< HEAD
import useStore from "@/z-context";
=======
import { formattedNumber } from "@/features/pesanan/components/status-order/card-pesanan";
import { api } from "@/lib/api";
>>>>>>> origin/dev
import { Link } from "@tanstack/react-router";
import Axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";

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

interface Store {
  name: string;
}

export function BuyerDashboardPage() {
  const [product, setProduct] = useState<ProductDashboard[]>([]);
  const [category, setCategory] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState<String>("");

<<<<<<< HEAD
  const [search, setSearch] = useState<string>("");
  const [store, setStore] = useState<Store[]>([]);
=======
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
>>>>>>> origin/dev

  useEffect(() => {
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

    async function getDataStore() {
      try {
        const store = await Axios({
          method: "get",
          url: "http://localhost:3000/buyers/store",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setStore(store.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getDataProduct();
<<<<<<< HEAD
    getDataStore();
=======
    getCategoryProduct();
>>>>>>> origin/dev
  }, []);

  const filterByName = product.filter((value) => {
    return value.name.toLowerCase().includes(search.toLowerCase());
  });

  const logOutUser = useStore((state) => state.logout);

  return (
    <>
      <div className="bg-white h-screen overflow-y-auto">
        <div className="flex justify-between items-center font-bold p-4 border-b-2 border-b-black bg-rose-600">
          <h1 className="font-extrabold text-2xl text-white">LAKOEBUYER</h1>
          <h1 className="text-xl text-white">Daftar Produk</h1>

          <div className="flex items-center gap-4">
            <TableCart />
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-5/6 rounded-full p-1 cursor-pointer border-2 border-2-white">
                  <p className="font-bold text-3xl text-white">
                    <BsPerson />
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="text-sm">
                <DialogHeader className="border-b-2 py-3">
                  <DialogTitle>My Profile</DialogTitle>
                </DialogHeader>

                <div className="flex gap-5">
                  <p className="font-bold text-xl mb-1">Nama Saya</p>
                </div>

                <Link
                  to="/auth/login"
                  className="[&.active]:font-bold text-lg flex justify-end gap-2 items-center"
                  onClick={logOutUser}
                >
                  <button className="bg-red-600 px-4 py-1 text-white rounded-lg">
                    Logout
                  </button>
                </Link>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex gap-3 p-3  bg-slate-800">
          <Input
            type="text"
            placeholder="Cari Pesanan"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
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
              {store.map((data) => {
                return <SelectItem value={data.name}>{data.name}</SelectItem>;
              })}
            </SelectContent>
          </Select>
        </div>

<<<<<<< HEAD
        <div className="flex flex-wrap justify-center gap-4 p-3 rounded-lg">
          {filterByName.map((data, index) => {
=======
        <div className="flex flex-wrap justify-center gap-6 p-3 py-8 rounded-lg">
          {product.map((data: any, index) => {
>>>>>>> origin/dev
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
