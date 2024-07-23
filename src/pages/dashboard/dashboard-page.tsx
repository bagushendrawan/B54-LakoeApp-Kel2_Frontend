import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { api } from "@/lib/api";
import useStore from "@/z-context";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsCash, BsCreditCard } from "react-icons/bs";
// import { Chart } from "./chart";
import WithdrawDialog from "./components/withdrawDialog";
// import { useForm } from "react-hook-form";
// import { useToast } from "@/components/use-toast";
import { Button } from "@/components/button";
import { GrTransaction } from "react-icons/gr";
import { LuDownload } from "react-icons/lu";
import AddBankAccountDialog from "./components/addBankAccountDialog";
import AllBankDialog from "./components/allBankDialog";
import { TableTransaction } from "./components/tableTransaction";
import { useToast } from "@/components/use-toast";
import { Chart } from "./components/chart";

type bankData = {
  bank: string;
  acc_name: string;
  acc_number: string;
};

export function DashboardPage() {
  const { toast } = useToast();
  const [invoiceData, setInvoiceData] = useState();
  const [invoiceBulaniniData, setInvoiceBulanIniData] = useState();
  const user = useStore((state) => state.user);
  const [bankData, setBankData] = useState<bankData>();
  useEffect(() => {
    async function fetchBank() {
      const response = await Axios({
        method: "get",
        url: `${api}/users/bank`,
        data: user.store_id,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBankData(response.data);
      console.log("bank", response.data);
    }
    fetchBank();
  }, []);

  useEffect(() => {
    async function auth() {
      try {
        const response = await Axios({
          method: "get",
          url: `${api}/form-produk/pesanan/${user.store_id}/9/1`,
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
  }, [user.store_id]);

  useEffect(() => {
    async function bulanIni() {
      try {
        const response = await Axios({
          method: "post",
          url: `${api}/form-produk/bulanini/${user.store_id}`,
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
        url: `${api}/users/bank`,
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
  const [selectedEkspor, setSelectedEkspor] = useState<string>("");
  const handleSelectEkspor = (option: string) => {
    setSelectedEkspor(option);
  };

  return (
    <div className=" w-full flex flex-col gap-2">
      {/* credit */}
      <div className="bg-white rounded-sm p-4">
        <h1 className="text-2xl font-bold text-blac my-4">Credit Dashboard</h1>
        <div className="flex gap-2">
          {/* credit */}
          <div className="w-full bg-white p-4 border rounded shadow-lg">
            <Label>Current Balance</Label>
            <h2 className="text-green-500 mb-4 font-bold text-2xl">
              Rp. 23.321.000
            </h2>
            <div className="flex gap-2">
              <AddBankAccountDialog />
              <WithdrawDialog />
            </div>
          </div>

          {/* bank */}
          <div className="w-full flex flex-col bg-white p-4 border rounded shadow-lg">
            <div className="flex flex-1 justify-between items-center">
              <BsCreditCard size={"2rem"} color="#22C55E" />
              <AllBankDialog />
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-600">
                {bankData?.bank} - {bankData?.acc_name}
              </p>
              <h2 className="text-gray-700 mb-4 font-bold text-2xl">
                {bankData?.acc_number}
              </h2>
            </div>
          </div>

          {/* transaksi */}
          <div className="w-full flex flex-col bg-white p-4 border rounded shadow-lg">
            <div className="flex flex-1">
              <GrTransaction size={"2rem"} color="#22C55E" />
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-600">Transaksi Berhasil</p>
              <h2 className="text-gray-700 mb-4 font-bold text-2xl">
                45 Transaksi
              </h2>
            </div>
          </div>

          {/* penghasilan */}
          <div className="w-full flex flex-col bg-white p-4 border rounded shadow-lg">
            <div className="flex flex-1">
              <BsCash size={"2rem"} color="#22C55E" />
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-600">Penghasilan Bulan Ini</p>
              <h2 className="text-gray-700 mb-4 font-bold text-2xl">
                Rp 7.800.000
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* chart */}
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

      {/* transaction */}
      <div className="w-full flex flex-col gap-2">
        <div className="flex w-full">
          {/* ekspor */}
          <div className="flex flex-1">
            <div className="flex gap-2">
              <Select onValueChange={handleSelectEkspor}>
                <SelectTrigger className="text-gray-150 w-32">
                  <SelectValue placeholder="Ekspor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="docx">DOCX</SelectItem>
                  <SelectItem value="xlsx">XLSX</SelectItem>
                </SelectContent>
              </Select>

              {selectedEkspor !== "" && (
                <a href="../../../index.html" download>
                  <Button className="bg-white hover:bg-slate-200">
                    <LuDownload size={"1.3rem"} color="black" />
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* sort */}
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desc">Terbaru ke Terlama</SelectItem>
                <SelectItem value="asc">Terlama ke Terbaru</SelectItem>
              </SelectContent>
            </Select>

            <Input className="w-full" placeholder="Invoice" />
          </div>
        </div>

        {/* result */}
        <div className="w-full max-h-96 rounded-sm overflow-y-auto">
          <TableTransaction />
        </div>
      </div>
    </div>
  );
}
