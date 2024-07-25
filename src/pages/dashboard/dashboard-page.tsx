import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import useStore from "@/z-context";
import Axios from "axios";
import { Chart } from "./components/chart";
import WithdrawDialog from "./components/withdrawDialog";
import AddBankAccountDialog from "./components/addBankAccountDialog";
import { Label } from "@/components/label";
import { GrTransaction } from "react-icons/gr";
import AllBankDialog from "./components/allBankDialog";
import TableWithdraw from "./components/tableWithdraw";
import ExportTable from "./components/exportDoc";
import { BsCash, BsCreditCard } from "react-icons/bs";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { formattedNumber } from "@/features/pesanan/components/status-order/card-pesanan";

export function DashboardPage() {
  const user = useStore((state) => state.user);
  const setBank = useStore((state) => state.SET_BANK);
  const registedBank = useStore((state) => state.bank);

  const setWithdraw = useStore((state) => state.SET_WITHDRAW);
  const dataWithdraw = useStore((state) => state.withdraw);
  const [sort, setSort] = useState<string>();

  const [invoiceData, setInvoiceData] = useState([]);
  const [invoiceBulanIniData, setInvoiceBulanIniData] = useState([]);

  const currentBalance = formattedNumber(
    invoiceData.reduce((total: any, inv: any) => {
      if (inv.status === "PESANAN_SELESAI") {
        return total + inv.prices + inv.service_charge;
      }
      return total;
    }, 0)
  );

  // fetch bank
  useEffect(() => {
    const fetchBank = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await Axios({
          method: "get",
          url: `${api}/bank-account/${user.id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBank(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBank();
  }, [registedBank]);

  // fetch withdraw
  useEffect(() => {
    const fetchWithdraw = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await Axios({
          method: 'get',
          url: `http://localhost:3000/withdraw/${user.id}`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setWithdraw(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWithdraw();
  }, [dataWithdraw]);

  // sort data withdraw
  const sortDataWithdraw = (data: IDataWithdraw[]) => {
    switch (sort) {
      case 'desc':
        return data.sort((a, b) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate());
      case 'asc':
        return data.sort((a, b) => new Date(a.createdAt).getDate() - new Date(b.createdAt).getMinutes());
      default:
        return data;
    }
  };

  useEffect(() => {
    sortDataWithdraw(dataWithdraw);
  }, [sort]);

  // ekspor dokumen
  const [selectedEkspor, setSelectedEkspor] = useState<string>('');

  return (
    <div className=" w-full flex flex-col gap-4">
      {/* credit */}
      <div className="bg-white rounded-sm p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-blac my-4">Credit Dashboard</h1>
        <div className="flex gap-2">
          {/* credit */}
          <div className="w-full bg-white p-4 border rounded shadow-sm">
            <Label>Current Balance</Label>
            <h2 className="text-green-500 mb-4 font-bold text-2xl">
              {" "}
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
            <div className="flex gap-2">
              <AddBankAccountDialog banks={registedBank} />
              <WithdrawDialog banks={registedBank} currentBalance={parseInt(currentBalance)} />
            </div>
          </div>

          {/* bank */}
          <div className="w-full flex flex-col bg-white p-4 border rounded shadow-sm">
            <div className="flex flex-1 justify-between items-center">
              <BsCreditCard size={"2rem"} color="#22C55E" />
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
                  <Label className="text-lg font-bold">
                    Belum ada akun bank
                  </Label>
                  <label className="text-sm text-red-600">
                    Tambahkan dulu akun bank kamu
                  </label>
                </>
              )}
            </div>
          </div>

          {/* transaksi */}
          <div className="w-full flex flex-col bg-white p-4 border rounded shadow-sm">
            <div className="flex flex-1">
              <GrTransaction size={"2rem"} color="#22C55E" />
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-600">Transaksi Berhasil</p>
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
          </div>

          {/* penghasilan */}
          <div className="w-full flex flex-col bg-white p-4 border rounded shadow-sm">
            <div className="flex flex-1">
              <BsCash size={"2rem"} color="#22C55E" />
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-gray-600">Penghasilan Bulan Ini</p>
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
        </div>
      </div>

      {/* chart */}
      <div className="w-full bg-white h-96 flex flex-col p-4 rounded-sm mb-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl text-gray-600">Reporting Period</h1>
          <div className="w-1/4 text-gray-700">
            <Select>
              <SelectTrigger className="font-light text-gray-150">
                <SelectValue placeholder="Pilih Jangka Waktu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">6 Hari Terakhir</SelectItem>
                <SelectItem value="dark">6 Minggu Terakhir</SelectItem>
                <SelectItem value="system">6 Bulan Terakhir</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Chart />
      </div>

      {/* withdraw */}
      <div className="w-full flex flex-col gap-2 shadow-lg">
        <div className="flex w-full">
          {/* ekspor */}
          <div className="flex flex-1">
            <div className="flex gap-2">
              <Select onValueChange={(option: string) => setSelectedEkspor(option)}>
                <SelectTrigger className="text-gray-150 w-32">
                  <SelectValue placeholder="Ekspor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="xlsx">XLSX</SelectItem>
                </SelectContent>
              </Select>

              {selectedEkspor !== '' && (
                <ExportTable dataWithdraw={dataWithdraw} selectedType={selectedEkspor} />
              )}
            </div>
          </div>

          {/* sort */}
          <div className="w-48 flex gap-2">
            <Select onValueChange={(option: string) => setSort(option)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desc">Terbaru ke Terlama</SelectItem>
                <SelectItem value="asc">Terlama ke Terbaru</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* result */}
        <div className="w-full max-h-96 rounded-sm overflow-y-auto">
          <TableWithdraw dataWithdraw={dataWithdraw} />
        </div>
      </div>
    </div>
  );
}
