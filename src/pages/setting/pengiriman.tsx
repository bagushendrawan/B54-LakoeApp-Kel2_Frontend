import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useToast } from "@/components/use-toast";
import { courier, DialogKurir } from "./component/dialogKurir";
import useStore from "@/z-context";
import { Button } from "@/components/button";

export type kurir = {
  courier_code: string;
  courier_service_name: string;
  file: any;
};

export function PengirimanPages() {
  const form = useForm();
  const user = useStore((state) => state.user);
  const [kurir, setKurir] = useState([]);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  async function onSubmit(values: kurir) {
    console.log(values);
    const dataForm = new FormData();

    dataForm.append("courier_code", values.courier_code);
    dataForm.append("courier_name", values.courier_service_name);
    if (values.file) dataForm.append("file", values.file[0]);
    console.log(dataForm.get("file"));
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await Axios({
        method: "post",
        url: `http://localhost:3000/form-produk/add/kurir/${user.id}`,
        data: dataForm,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(response.data);
      setOpen(false);
    } catch (error: any) {
      console.log("error", error);
      toast({
        variant: "destructive",
        title: `Error! ${error.response.status}`,
        description: `${error.message}`,
      });
    }
  }

  useEffect(() => {
    async function fetchKurir() {
      const response = await Axios({
        method: "get",
        url: `http://localhost:3000/form-produk/get/kurir/${user.id}`,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setKurir(response.data.courier_list);
    }
    fetchKurir();
  }, []);
  return (
    <>
      <div className="bg-white rounded-lg h-full w-full m-2 p-4">
        <h1 className="text-2xl w-full font-bold mt-2 ms-2 mb-8">
          Pilih Pengiriman
        </h1>
        <div className=" flex flex-wrap justify-start overflow-y-auto">
          {kurir &&
            kurir.map((val: any) => (
              <div className="border-2 w-5/12 flex items-center m-2 p-4 rounded-lg h-24">
                <img src={val.logo} className="w-24"></img>
                <div className="flex flex-col gap-2">
                  <h1 className="ms-2 font-bold">{val.courier_service_name}</h1>
                  <h1 className="ms-2 font-bold">{val.courier_service_code}</h1>
                </div>
              </div>
            ))}
          <div className="border-2 w-1/12 flex justify-center items-center m-2 p-4 rounded-lg h-24">
            <DialogKurir
              set={setKurir}
              form={form}
              onSubmit={onSubmit}
              open={open}
              setOpen={setOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}
