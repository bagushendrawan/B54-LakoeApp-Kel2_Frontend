import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Button } from "@/components/button";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { FC, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Axios from "axios";
import { useForm } from "react-hook-form";
import useStore from "@/z-context";
import { api } from "@/lib/api";

const withdrawSchema = z.object({
  nominal: z.number().min(500000, { message: "Minimal withdraw Rp500.000" }),
  bank: z.string(),
  rekening: z.string(),
  name: z.string(),
});

const WithdrawDialog: FC<{ banks: IBankAccount[] }> = ({ banks }) => {
  const [selectedBankDetail, setSelectedBankDetail] =
    useState<IBankAccount | null>();

  const handleSelectBank = (value: string) => {
    const selectedBank = banks.find((bank) => bank.bank === value);
    setSelectedBankDetail(selectedBank || null);
  };

  const user = useStore((state) => state.user);

  const formWithdraw = useForm<IWithdraw>({
    mode: "onSubmit",
    resolver: zodResolver(withdrawSchema),
  });

  const handleWithdraw = async (data: any) => {
    const token = localStorage.getItem("token");
    const userId = user.id;

    if (!selectedBankDetail) {
      return "Pilih akun bank terlebih dahulu";
    }

    formWithdraw.setValue("bank", selectedBankDetail.bank);
    formWithdraw.setValue("rekening", selectedBankDetail.acc_number);
    formWithdraw.setValue("name", selectedBankDetail.acc_name);
    formWithdraw.setValue("user_id", userId);

    const newData = {
      ...data,
    };

    console.log(newData);

    await Axios({
      method: "post",
      url: `${api}/withdraw/${userId}`,
      data: newData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {banks.length !== 0 ? (
          <Button className="w-full gap-1 bg-[#22C55E] hover:bg-green-600">
            <BiMoneyWithdraw size={"1.3rem"} />
            Tarik Saldo
          </Button>
        ) : (
          <Button
            className="w-full gap-1 bg-[#22C55E] hover:bg-green-600"
            disabled
          >
            <BiMoneyWithdraw size={"1.3rem"} />
            Tarik Saldo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={formWithdraw.handleSubmit(handleWithdraw)}>
          <DialogHeader>
            <DialogTitle className="text-lg font-bold mb-4">
              Mau Tarik Saldo?
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-4 text-black">
              {/* nominal */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="nominal">
                  Berapa nominal yang mau ditarik?
                  <span className="text-red-600"> *</span>
                </Label>
                <Input
                  type="number"
                  id="nominal"
                  placeholder="Masukan Nominal"
                  {...formWithdraw.register("nominal")}
                />
              </div>

              {/* bank */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="nominal">
                  Pilih Akun Bank
                  <span className="text-red-600"> *</span>
                </Label>
                <Select onValueChange={handleSelectBank}>
                  <SelectTrigger id="bank" className="w-full">
                    <SelectValue placeholder="Pilih Akun Bank" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectLabel>
                        {banks.length !== 0 ? (
                          <Label>Akun Bank Terdaftar</Label>
                        ) : (
                          <Label>Belum ada akun bank yang terdaftar</Label>
                        )}
                      </SelectLabel>
                      {banks.map((bank) => (
                        <SelectItem value={bank.bank}>{bank.bank}</SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {selectedBankDetail ? (
                <div className="flex flex-col gap-2">
                  <Label>Detail Bank</Label>
                  <div className="flex items-center gap-2 border rounded-md p-2 px-4">
                    <p className="italic">{selectedBankDetail.bank}</p>
                    <GoDotFill />
                    <p className="italic">{selectedBankDetail.acc_number}</p>
                    <GoDotFill />
                    <p className="italic">{selectedBankDetail.acc_name}</p>
                  </div>

                  <Label className="text-red-600 italic">
                    * Pastikan data bank sudah sesuai sebelum melanjutkan
                  </Label>
                </div>
              ) : (
                <Label className="text-red-600 italic">
                  * Silahkan pilih akun bank terlebih dahulu
                </Label>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex justify-end space-x-2 mt-4">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full"
                >
                  Batalkan
                </Button>
              </DialogClose>

              <DialogClose>
                <Button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-full"
                >
                  Tarik Saldo
                </Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawDialog;
