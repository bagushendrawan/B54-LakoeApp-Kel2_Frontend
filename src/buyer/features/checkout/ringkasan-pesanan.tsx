import { Route } from "@/routes/buyer/checkout";
import Axios from "axios";
import { useEffect, useState } from "react";

interface paramsTypes {
  id: number;
}

interface productItemsForm {
  name: string;
  price: number;
  quantity: number;
  // stock: number;
  amount: number;
}

export function RingkasanPesanan() {
  const params: paramsTypes = Route.useSearch();
  // console.log("ini id cart-items", params);

  const [dataProduct, setDataProduct] = useState<productItemsForm>({
    name: "",
    price: 0,
    quantity: 0,
    // stock: 0,
    amount: 0,
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await Axios({
          method: "get",
          url: `http://localhost:3000/cart-items/${params.id}`,
          data: dataProduct,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data: productItemsForm = {
          name: response.data.name,
          price: response.data.price,
          quantity: response.data.quantity,
          // stock: response.data.stock,
          amount: response.data.price * response.data.quantity,
        };

        setDataProduct(data);
        console.log("ringkasan pesanan", data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div className="border border-blue-900 bg-blue-300 w-5/6 rounded-lg p-3 mb-4">
        <p>Ringkasan Pesanan</p>

        <div className="mt-3 flex gap-3 items-center">
          <img src="" alt="image" className="w-3/12 rounded-sm" />

          <div className="text-s">
            <p>{dataProduct.name}</p>
            <p>{dataProduct.quantity} item (100gr)</p>
            <p>Rp {dataProduct.price}</p>
          </div>
        </div>

        <div className="flex justify-between items-center my-4">
          <p>Total Harga (1)</p>
          <p>Rp {dataProduct.amount}</p>
        </div>
        <div className="flex justify-between items-center pb-4 border-b-2">
          <p>Biaya Pengiriman</p>
          <p>Rp 190.000</p>
        </div>
        <div className="flex justify-between items-center my-4">
          <p>Total Pembayaran (1)</p>
          <p>Rp 190.000</p>
        </div>
      </div>
    </>
  );
}
