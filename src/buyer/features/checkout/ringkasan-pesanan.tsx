import { formattedNumber } from "@/features/pesanan/components/status-order/card-pesanan";
import { api } from "@/lib/api";
import { Route } from "@/routes/buyer/checkout";
import useStore from "@/z-context";
import Axios from "axios";
import { useEffect, useState } from "react";

interface paramsTypes {
  id: string;
}

interface productItemsForm {
  img: string;
  name: string;
  price: number;
  quantity: number;
  // stock: number;
  amount: number;
  store_id: string;
}

export function RingkasanPesanan(props: any) {
  const params: paramsTypes = Route.useSearch();

  const selectedCourier = useStore((state) => state.selectedCourier);
  // console.log("ini kurir dipilih", selectedCourier);

  const [dataProduct, setDataProduct] = useState<productItemsForm>({
    img: "",
    name: "",
    price: 0,
    quantity: 0,
    // stock: 0,
    amount: 0,
    store_id: "",
  });

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await Axios({
          method: "get",
          url: `${api}/cart-items/${params.id}`,
          data: dataProduct,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data: productItemsForm = {
          img: response.data.img,
          name: response.data.name,
          price: response.data.price,
          quantity: response.data.quantity,
          // stock: response.data.stock,
          amount: response.data.price * response.data.quantity,
          store_id: response.data.store_id,
        };

        console.log("data", response.data);

        setDataProduct(data);
        props.form?.setValue(
          "prices",
          response.data.price * response.data.quantity
        );
        props.form?.setValue("store_id", data.store_id);

        // console.log("ringkasan pesanan", data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div className="bg-green-100 shadow-sm shadow-black w-5/6 rounded-lg p-3 mb-4">
        <p>Ringkasan Pesanan</p>

        <div className="mt-3 flex gap-3 items-center">
          <img
            src={dataProduct.img}
            alt="image"
            className="w-3/12 rounded-sm"
          />

          <div className="text-s">
            <p>{dataProduct.name}</p>
            <p>{dataProduct.quantity} item (100gr)</p>
            <p>{formattedNumber(dataProduct.price)}</p>
          </div>
        </div>

        <div className="flex justify-between items-center my-4">
          <p>Total Harga ({dataProduct.quantity})</p>
          <p>{formattedNumber(dataProduct.amount)}</p>
        </div>

        {selectedCourier?.price ? (
          <div className="flex justify-between items-center pb-4 border-b-2">
            <p>Biaya Pengiriman</p>
            <p>{formattedNumber(selectedCourier?.price)}</p>
          </div>
        ) : (
          <div className="flex justify-between items-center border-b-2"></div>
        )}

        <div className="flex justify-between items-center my-4">
          <p>Total Pembayaran ({dataProduct.quantity})</p>
          {selectedCourier && dataProduct.amount + selectedCourier.price ? (
            <p>
              {selectedCourier &&
                formattedNumber(dataProduct.amount + selectedCourier.price)}
            </p>
          ) : (
            <p>{formattedNumber(dataProduct.amount)}</p>
          )}
        </div>
      </div>
    </>
  );
}
