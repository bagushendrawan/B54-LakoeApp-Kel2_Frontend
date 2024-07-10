import { Button } from "@/components/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { BsCash, BsGift, BsInfoCircle, BsPlus, BsQuestionDiamond, BsReceipt } from "react-icons/bs";

export function DashboardPage() {
    return (
        <>
        <div className="bg-slate-200 w-11/12 flex flex-col gap-4 ms-4 p-4">
            <h1 className="text-2xl font-bold">Credit Dashboard</h1>
            <div className="flex gap-4">
                <div className="w-5/12 bg-slate-50 p-4">
                        <p className="text-xs mb-2">Current Balance</p>
                        <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp. 23.321.000</h2>
                        <Button className="bg-green-500 w-full mx-auto"><BsPlus className="text-xl me-2"></BsPlus>Tambahkan Saldo</Button>
                </div>
                <div className="w-3/12 bg-slate-50 p-4">
                        <BsReceipt className="text-3xl mb-4 text-green-600"></BsReceipt>
                        <p className="text-xs mb-1">Penarikan Sedang Dalam Proses</p>
                        <h2 className="text-gray-700 mb-4 font-bold text-2xl">Rp. 23.321.000</h2>
                </div>
                <div className="w-3/12 bg-slate-50 p-4">
                        <BsCash className="text-3xl mb-4 text-green-600"></BsCash>
                        <div className="flex justify-between">
                        <div className="flex">
                        <p className="text-xs mb-1 me-2">Saldo Tertahan</p>
                        <BsInfoCircle></BsInfoCircle>
                        </div>
                        <p className="text-xs text-blue-500">Lihat Semua</p>
                        </div>
                        <h2 className="text-gray-700 mb-4 font-bold text-2xl">Rp. 23.321.000</h2>
                </div>
                <div className="w-3/12 bg-slate-50 p-4">
                        <BsQuestionDiamond className="text-3xl mb-4 text-red-600"></BsQuestionDiamond>
                        <div className="flex justify-between">
                        <div className="flex">
                        <p className="text-xs mb-1 me-2">Tagihan Belum Terbayar</p>
                        <BsInfoCircle></BsInfoCircle>
                        </div>
                        <p className="text-xs text-blue-500">Lihat Semua</p>
                        </div>
                        <h2 className="text-gray-700 mb-4 font-bold text-2xl">Rp. 23.321.000</h2>
                </div>
            </div>
            <div className="w-full bg-slate-50 h-72 flex flex-col p-4">
                <div className="flex justify-between">
                <h1 className="font-bold text-xl text-gray-600">Reporting Period</h1>
                <div className="w-1/4 text-gray-700">
                <Select>
                    <SelectTrigger className="font-light text-gray-150">
                    <SelectValue placeholder="Pilih Jangka Waktu"/>
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="light">30 Hari</SelectItem>
                    <SelectItem value="dark">1 Minggu</SelectItem>
                    <SelectItem value="system">1 Hari</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                </div>
                <div className="w-full bg-white h-24 mt-4 flex gap-4">
                    <div className="w-1/4 bg-yellow-100 h-11/12"></div>
                    <div className="w-1/4 bg-yellow-100 h-11/12"></div>
                    <div className="w-1/4 bg-yellow-100 h-11/12"></div>
                    <div className="w-1/4 bg-yellow-100 h-11/12"></div>
                </div>
                <div className="w-full bg-white h-24 mt-4 flex gap-4">
                    <div className="w-1/4 bg-yellow-100 h-11/12"></div>
                    <div className="w-1/4 bg-yellow-100 h-11/12"></div>
                    <div className="w-1/4 bg-yellow-100 h-11/12"></div>
                    <div className="w-1/4 bg-yellow-100 h-11/12"></div>
                </div>
            </div>
        </div>
        {/* <div className="w-3/4 bg-slate-50 h-1/6 mx-auto flex flex-col justify-center items-center gap-1">
            <h1 className="text-2xl font-bold">Saldo Utama</h1>
            <h2 className="text-xl font-semibold">Rp.32.230.000</h2>
        </div>
        <div className="flex gap-4 mx-auto w-11/12 text-center">
            
            <div className="w-1/3 bg-slate-50 p-4">
            <p className="text-xs mb-2">Saldo Tertahan</p>
            <h2 className="text-red-500 text-2xl">Rp.250.000</h2>
            </div>

            <div className="w-1/3 bg-slate-50 p-4">
            <p className="text-xs mb-2">Pesanan Terselesaikan</p>
            <h2 className="text-2xl">4</h2>
            </div>
        </div>
        <div className="mx-auto h-72 bg-slate-50 w-11/12 text-center p-4">
            <h1>Grafik Penjualan</h1>
        </div>

        <div className="bg-slate-50 w-11/12 h-24 mx-auto">

        </div> */}
        </>
    )
}