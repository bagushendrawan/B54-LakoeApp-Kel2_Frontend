import { zodResolver } from "@hookform/resolvers/zod";
import Axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type checkoutForm = {
  name: string;
  phone: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_district: string;
  receiver_address: string;
  receiver_latitude: number;
  receiver_longitude: number;
  prices: number;
  service_charge: number;
};

const checkoutSchema = z.object({
  name: z.string(),
  phone: z.string(),
  receiver_name: z.string(),
  receiver_phone: z.string(),
  receiver_district: z.string(),
  receiver_address: z.string(),
  receiver_latitude: z.number(),
  receiver_longitude: z.number(),
  prices: z.number(),
  service_charge: z.number(),
});

export const useCheckoutForm = () => {
  const form = useForm<checkoutForm>({
    mode: "onChange",
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit: SubmitHandler<checkoutForm> = async (data) => {
    try {
      const response = await Axios({
        method: "post",
        url: `http://localhost:3000/buyers/buy`,
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return form;
};
