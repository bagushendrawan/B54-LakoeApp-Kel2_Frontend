import { Button } from "@/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import useStore from "@/z-context";
import { useEffect, useState } from "react";
import {
  BsBag,
  BsCash,
  BsCreditCard,
  BsGift,
  BsInfoCircle,
  BsPlus,
  BsQuestionDiamond,
  BsReceipt,
} from "react-icons/bs";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/use-toast";
import { Chart } from "./chart";
import WithdrawDialog from "./components/withdrawDialog";
import { CardTransaction } from "./components/cardTransaction";
import { formattedNumber } from "@/features/pesanan/components/status-order/card-pesanan";

type bankData = {
  bank: string;
  acc_name: string;
  acc_number: string;
};

export function DashboardPage() {
  const { toast } = useToast();
  const user = useStore((state) => state.user);
  const [bankData, setBankData] = useState<bankData>();
  const [invoiceData, setInvoiceData] = useState([]);
  const [invoiceBulanIniData, setInvoiceBulanIniData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchBank() {
      const response = await Axios({
        method: "get",
        url: `http://localhost:3000/users/bank`,
        data: user.store_id,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBankData(response.data);
    }
    fetchBank();
  }, []);

  useEffect(() => {
    async function auth() {
      try {
        const response = await Axios({
          method: "get",
          url: `http://localhost:3000/form-produk/pesanan/${user.store_id}/9/1`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = response.data;
        setInvoiceData(data);
      } catch (error) {
        console.log(error);
      }
    }

    auth();
  }, [user.store_id, token]);

  useEffect(() => {
    async function bulanIni() {
      try {
        const response = await Axios({
          method: "post",
          url: `http://localhost:3000/form-produk/bulanini/${user.store_id}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = response.data;
        console.log("bulan ini", data);
        setInvoiceBulanIniData(data);
      } catch (error) {
        console.log(error);
      }
    }
    bulanIni();
  }, []);

  const formBank = useForm<bankData>();
  async function onSubmit(data: bankData) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      console.log("data", data);
      const response = await Axios({
        method: "patch",
        url: `http://localhost:3000/users/bank`,
        data: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      setBankData(response.data);
      toast({
        variant: "success",
        title: `Bank Updated!`,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: `Error!`,
        description: `${error.message}`,
      });
      console.log(error);
    }
  }
  return (
    <div className=" w-full flex flex-col gap-4 ms-4 ps-2 pe-6 py-5 overflow-hidden">
      <h1 className="text-2xl font-bold text-white">Credit Dashboard</h1>
      <div className="flex gap-4">
        <div className="w-5/12 bg-white p-4 rounded-sm">
          <p className="text-sm text-gray-600 mb-2">Current Balance</p>
          <h2 className="text-green-500 mb-4 font-bold text-2xl">
            {invoiceData &&
              formattedNumber(
                invoiceData.reduce((total: any, inv: any) => {
                  if (inv.status === "PESANAN_SELESAI") {
                    return total + inv.prices + inv.service_charge;
                  }
                  return total;
                }, 0)
              )}
          </h2>
          {/* <Button className="bg-green-500 w-full mx-auto"><BsPlus className="text-xl me-2"></BsPlus>Tambahkan Akun Bank</Button> */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-500 w-full mx-auto mb-2">
                <BsPlus className="text-xl me-2" />
                Tambahkan Akun Bank
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Update Akun Bank</DialogTitle>
                <DialogDescription>
                  Update Akun Bank Untuk Seller
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={formBank.handleSubmit(onSubmit)}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Bank
                    </Label>
                    <Input
                      id="bank"
                      defaultValue={bankData?.bank}
                      {...formBank.register("bank")}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Nomor Rekening
                    </Label>
                    <Input
                      id="nomor_rekening"
                      defaultValue={bankData?.acc_number}
                      {...formBank.register("acc_number")}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nama Rekening
                    </Label>
                    <Input
                      id="nama_rekening"
                      defaultValue={bankData?.acc_name}
                      {...formBank.register("acc_name")}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          <WithdrawDialog />
        </div>
        <div className="w-3/12 bg-white p-4 rounded-sm">
          <BsCreditCard className="text-3xl mb-4 text-green-600"></BsCreditCard>
          <p className="text-sm text-gray-600 mb-1">
            {bankData?.acc_name} - [{bankData?.bank}]
          </p>
          <h2 className="text-gray-700 mb-4 font-bold text-2xl">
            {bankData?.acc_number}
          </h2>
        </div>
        <div className="w-3/12 bg-white p-4 rounded-sm">
          <BsBag className="text-3xl mb-4 text-green-600"></BsBag>
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-sm text-gray-600 mb-1 me-2">
                Transaksi Berhasil
              </p>
              {/* <BsInfoCircle></BsInfoCircle> */}
            </div>
            {/* <p className="text-xs text-blue-500">Lihat Semua</p> */}
          </div>
          <h2 className="text-gray-700 mb-4 font-bold text-2xl">
            {invoiceData &&
              invoiceData.reduce((total: any, inv: any) => {
                if (inv.status === "PESANAN_SELESAI") {
                  return (total += 1);
                }
                return total;
              }, 0)}
          </h2>
        </div>
        <div className="w-3/12 bg-white p-4 rounded-sm">
          <BsCash className="text-3xl mb-4 text-green-600"></BsCash>
          <div className="flex justify-between">
            <div className="flex">
              <p className="text-sm mb-1 me-2">Omset Bulan Ini</p>
              {/* <BsInfoCircle></BsInfoCircle> */}
            </div>
            {/* <p className="text-xs text-blue-500">Lihat Semua</p> */}
          </div>
          <h2 className="text-gray-700 mb-4 font-bold text-2xl">
            {invoiceBulanIniData &&
              formattedNumber(
                invoiceBulanIniData.reduce((total: any, inv: any) => {
                  if (inv.status === "PESANAN_SELESAI") {
                    return total + inv.prices + inv.service_charge;
                  }
                  return total;
                }, 0)
              )}
          </h2>
        </div>
      </div>

      <div className="w-full bg-white h-96 flex flex-col p-4 rounded-sm">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl text-gray-600">Reporting Period</h1>
          <div className="w-1/4 text-gray-700">
            <Select>
              <SelectTrigger className="font-light text-gray-150">
                <SelectValue placeholder="Pilih Jangka Waktu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">30 Hari</SelectItem>
                <SelectItem value="dark">1 Minggu</SelectItem>
                <SelectItem value="system">1 Hari</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Chart />
      </div>

      <div className="flex justify-between w-full">
        <div className="justify-self-start">
          <Select>
            <SelectTrigger className="font-light text-gray-150 w-32">
              <SelectValue placeholder="Ekspor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">30 Hari</SelectItem>
              <SelectItem value="dark">1 Minggu</SelectItem>
              <SelectItem value="system">1 Hari</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="font-light text-gray-150 w-32">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">30 Hari</SelectItem>
              <SelectItem value="dark">1 Minggu</SelectItem>
              <SelectItem value="system">1 Hari</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="font-light text-gray-150 w-32">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">30 Hari</SelectItem>
              <SelectItem value="dark">1 Minggu</SelectItem>
              <SelectItem value="system">1 Hari</SelectItem>
            </SelectContent>
          </Select>
          <Input className="w-32" placeholder="Order ID"></Input>
        </div>
      </div>

      <div className="bg-white w-full h-12 mt-4 flex justify-between items-center py-6 px-12 text-xs font-bold rounded-sm">
        <p>No.</p>
        <p>Deskripsi</p>
        <p>Nilai</p>
        <p>Status</p>
        <p>Order ID</p>
        <p>Tanggal</p>
      </div>

      <div className="bg-white w-full h-64 justify-start items-center gap-4 p-4 overflow-y-auto rounded-sm">
        <CardTransaction disabled={false} title="Hello"></CardTransaction>
        <CardTransaction disabled={false} title="Hello"></CardTransaction>
        <CardTransaction disabled={false} title="Hello"></CardTransaction>
        <CardTransaction disabled={false} title="Hello"></CardTransaction>
        <CardTransaction disabled={false} title="Hello"></CardTransaction>
        {/* <p className="flex gap-4 justify-center items-center text-xl text-gray-300">
                    <BsInfoCircle />Tidak ada aktifitas dalam rentang tanggal ini
                </p> */}
      </div>
    </div>
  );
}
