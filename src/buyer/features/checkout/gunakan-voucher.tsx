import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Input } from "@/components/input";
import useStore from "@/z-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useForm } from "react-hook-form";
import { IoIosArrowForward } from "react-icons/io";
import Axios from "axios";
import { api } from "@/lib/api";
import { useState } from "react";

export function GunakanVoucher() {
  const setDisc = useStore((state) => state.SET_DISCOUNT);
  const deleteDisc = useStore((state) => state.DELETE_DISCOUNT);
  const disc = useStore((state) => state.discount);

  const [code, setCode] = useState("");

  async function onSumbitDisc() {
    try {
      console.log("hit", code);
      const response = await Axios({
        method: "get",
        url: `${api}/buyers/discount/${code}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        const dataDiscount = {
          code: response.data.code,
          amount: response.data.amount,
          id: response.data.id,
        };

        setDisc(dataDiscount);
        console.log(disc);
      }
    } catch (err) {
      console.log(err);
      deleteDisc();
    }
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-white border border-black w-5/6 rounded-lg py-3 flex justify-center mb-4 cursor-pointer">
            <p className="flex gap-2 items-center font-bold">
              Gunakan / Masukkan Voucher <IoIosArrowForward />
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="text-sm">
          <DialogHeader className="border-b-2 py-3">
            <DialogTitle>Pilih Diskon Voucher</DialogTitle>

            <div className="flex gap-3 pt-3">
              <Input
                placeholder="Masukkan kode voucher"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button type="button" onClick={onSumbitDisc}>
                Terapkan
              </Button>
            </div>
          </DialogHeader>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                {disc.amount > 0 && (
                  <p>
                    {disc.code} {disc.amount}
                  </p>
                )}
                {/* <AccordionTrigger>Pilih voucher yang tersedia</AccordionTrigger>
                {disc && (
                  <AccordionContent>
                    {disc.code} & {disc.amount}
                  </AccordionContent>
                )} */}
              </AccordionItem>
            </Accordion>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
