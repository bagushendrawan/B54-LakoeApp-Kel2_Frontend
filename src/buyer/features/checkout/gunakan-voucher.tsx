import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Input } from "@/components/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { BiSolidDiscount } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

export function GunakanVoucher() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-white shadow-sm shadow-black w-5/6 rounded-lg py-3 flex justify-center mb-4 cursor-pointer">
            <p className="flex gap-2 items-center font-bold">
              <BiSolidDiscount className="text-green-700 text-2xl" /> Gunakan /
              Masukkan Voucher <IoIosArrowForward />
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="text-sm">
          <DialogHeader className="border-b-2 py-3">
            <DialogTitle>Pilih Diskon Voucher</DialogTitle>

            <div className="flex gap-3 pt-3">
              <Input placeholder="Masukkan kode voucher" />
              <Button>Terapkan</Button>
            </div>
          </DialogHeader>

          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Pilih voucher yang tersedia</AccordionTrigger>
                <AccordionContent>-</AccordionContent>
                <AccordionContent>-</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
