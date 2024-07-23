import { Input } from "@/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import useStore from "@/z-context";
import { useEffect, useState } from "react";
import { BsCash, BsCreditCard } from "react-icons/bs";
import Axios from "axios";
// import { useForm } from "react-hook-form";
// import { useToast } from "@/components/use-toast";
import { Chart } from "./components/chart";
import WithdrawDialog from "./components/withdrawDialog";
import AddBankAccountDialog from "./components/addBankAccountDialog";
import { Label } from "@/components/label";
import { GrTransaction } from "react-icons/gr";
import AllBankDialog from "./components/allBankDialog";
import { TableTransaction } from "./components/tableTransaction";
import { LuDownload } from "react-icons/lu";
import { Button } from "@/components/button";

export function DashboardPage() {
  // const { toast } = useToast();
  const user = useStore((state) => state.user);
  const setBank = useStore((state) => state.SET_BANK);
  const registedBank = useStore((state) => state.bank);

  useEffect(() => {
    const fetchBank = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await Axios({
          method: 'get',
          url: `http://localhost:3000/bank-account/${user.id}`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setBank(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBank();
  }, []);

  const [selectedEkspor, setSelectedEkspor] = useState<string>('');
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
            <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp. 23.321.000</h2>
            <div className="flex gap-2">
              <AddBankAccountDialog banks={registedBank} />
              <WithdrawDialog banks={registedBank} />
            </div>
          </div>

          {/* bank */}
          <div className="w-full flex flex-col bg-white p-4 border rounded shadow-lg">
            <div className="flex flex-1 justify-between items-center">
              <BsCreditCard size={'2rem'} color="#22C55E" />
              <AllBankDialog banks={registedBank} />
            </div>

            <div className="flex flex-col">
              {registedBank.length !== 0 ? (
                <>
                  <p className="text-sm text-gray-600">
                    {registedBank[0]?.bank} - {registedBank[0]?.acc_name}
                  </p>
                  <h2 className="text-gray-700 mb-4 font-bold text-2xl">
                    {registedBank[0]?.acc_number}
                  </h2>
                </>
              ) : (
                <>
                  <Label className="text-lg font-bold">Belum ada akun bank</Label>
                  <label className="text-sm text-red-600">Tambahkan dulu akun bank kamu</label>
                </>
              )}
            </div>
          </div>

          {/* transaksi */}
          <div className="w-full flex flex-col bg-white p-4 border rounded shadow-lg">
            <div className="flex flex-1">
              <GrTransaction size={'2rem'} color="#22C55E" />
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-600">Transaksi Berhasil</p>
              <h2 className="text-gray-700 mb-4 font-bold text-2xl">45 Transaksi</h2>
            </div>
          </div>

          {/* penghasilan */}
          <div className="w-full flex flex-col bg-white p-4 border rounded shadow-lg">
            <div className="flex flex-1">
              <BsCash size={'2rem'} color="#22C55E" />
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-600">Penghasilan Bulan Ini</p>
              <h2 className="text-gray-700 mb-4 font-bold text-2xl">Rp 7.800.000</h2>
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

              {selectedEkspor !== '' && (
                <a href="../../../index.html" download>
                  <Button className="bg-white hover:bg-slate-200">
                    <LuDownload size={'1.3rem'} color="black" />
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
