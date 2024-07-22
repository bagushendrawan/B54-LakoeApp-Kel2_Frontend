import { useForm } from "react-hook-form";
import Axios from "axios"

export const formCourier = (invID : string) => {
    const formOrderCourier = useForm();
    async function onSubmit(){
        const response = await Axios({
            method: "post",
            url: `http://localhost:3000/form-produk/order-couriers/${invID}`,
            headers: { 
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
             },
            })
    }

    return {
        formOrderCourier,
        onSubmit
    }
}