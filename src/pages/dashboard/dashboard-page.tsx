import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { BsCash, BsGift, BsInfoCircle, BsPlus, BsQuestionDiamond, BsReceipt } from "react-icons/bs";

export function DashboardPage() {
    return (
        <>
            <div className=" w-full flex flex-col gap-4 ms-4 p-4">
                <h1 className="text-2xl font-bold text-orange-600">Credit Dashboard</h1>
                <div className="flex gap-4">
                    <div className="w-5/12 bg-stone-50 p-4">
                        <p className="text-sm text-gray-600 mb-2">Current Balance</p>
                        <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp. 23.321.000</h2>
                        <Button className="bg-green-500 w-full mx-auto"><BsPlus className="text-xl me-2"></BsPlus>Tambahkan Saldo</Button>
                    </div>
                    <div className="w-3/12 bg-stone-50 p-4">
                        <BsReceipt className="text-3xl mb-4 text-green-600"></BsReceipt>
                        <p className="text-sm text-gray-600 mb-1">Penarikan Sedang Dalam Proses</p>
                        <h2 className="text-gray-700 mb-4 font-bold text-2xl">Rp. 23.321.000</h2>
                    </div>
                    <div className="w-3/12 bg-stone-50 p-4">
                        <BsCash className="text-3xl mb-4 text-green-600"></BsCash>
                        <div className="flex justify-between">
                            <div className="flex">
                                <p className="text-sm text-gray-600 mb-1 me-2">Saldo Tertahan</p>
                                <BsInfoCircle></BsInfoCircle>
                            </div>
                            <p className="text-xs text-blue-500">Lihat Semua</p>
                        </div>
                        <h2 className="text-gray-700 mb-4 font-bold text-2xl">Rp. 23.321.000</h2>
                    </div>
                    <div className="w-3/12 bg-stone-50 p-4">
                        <BsCash className="text-3xl mb-4 text-green-600"></BsCash>
                        <div className="flex justify-between">
                            <div className="flex">
                                <p className="text-sm text-red-600 mb-1 me-2">Belum Dibayar</p>
                                <BsInfoCircle></BsInfoCircle>
                            </div>
                            <p className="text-xs text-blue-500">Lihat Semua</p>
                        </div>
                        <h2 className="text-gray-700 mb-4 font-bold text-2xl">Rp. 23.321.000</h2>
                    </div>
                </div>

                <div className="w-full bg-stone-50 h-72 flex flex-col p-4">
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
                    <div className="w-full bg-stone-50 h-24 mt-4 flex gap-4">
                        <div className="w-1/4 bg-transparent border-2 p-2 rounded-sm h-11/12 flex items-center gap-6">
                            <BsCash className="text-3xl text-red-500 ms-8"></BsCash>
                            <div className="flex flex-col mt-4">
                                <p className="text-xs text-gray-600 mb-1">Penarikan Sedang Dalam Proses</p>
                                <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp.0</h2>
                            </div>
                        </div>
                        <div className="w-1/4 bg-transparent border-2 p-2 rounded-sm h-11/12 flex items-center gap-6">
                            <BsCash className="text-3xl text-green-500 ms-8"></BsCash>
                            <div className="flex flex-col mt-4">
                                <p className="text-xs text-gray-600 mb-1">Pendapatan COD</p>
                                <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp.0</h2>
                            </div>
                        </div>
                        <div className="w-1/4 bg-transparent border-2 p-2 rounded-sm h-11/12 flex items-center gap-6">
                            <BsCash className="text-3xl text-green-500 ms-8"></BsCash>
                            <div className="flex flex-col mt-4">
                                <p className="text-xs text-gray-600 mb-1">Cashback Pengiriman</p>
                                <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp.0</h2>
                            </div>
                        </div>
                        <div className="w-1/4 bg-transparent border-2 p-2 rounded-sm h-11/12 flex items-center gap-6">
                            <BsCash className="text-3xl text-green-500 ms-8"></BsCash>
                            <div className="flex flex-col mt-4">
                                <p className="text-xs text-gray-600 mb-1">Pendapatan E-Payments</p>
                                <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp.0</h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-stone-50 rounded-sm h-24 mt-4 pb-4 flex gap-4">
                        <div className="w-1/4 bg-transparent border-2 p-2 rounded-sm h-11/12 flex items-center gap-6">
                            <BsCash className="text-3xl text-red-500 ms-8"></BsCash>
                            <div className="flex flex-col mt-4">
                                <p className="text-xs text-gray-600 mb-1">Refund Biaya Pengiriman</p>
                                <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp.0</h2>
                            </div>
                        </div>
                        <div className="w-1/4 bg-transparent border-2 p-2 rounded-sm h-11/12 flex items-center gap-6">
                            <BsCash className="text-3xl text-yellow-500 ms-8"></BsCash>
                            <div className="flex flex-col mt-4">
                                <p className="text-xs text-gray-600 mb-1">Kredit Lainnya</p>
                                <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp.0</h2>
                            </div>
                        </div>
                        <div className="w-1/4 bg-transparent border-2 p-2 rounded-sm h-11/12 flex items-center gap-6">
                            <BsCash className="text-3xl text-yellow-500 ms-8"></BsCash>
                            <div className="flex flex-col mt-4">
                                <p className="text-xs text-gray-600 mb-1">Klaim Pengiriman</p>
                                <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp. 0</h2>
                            </div>
                        </div>
                        <div className="w-1/4 bg-transparent border-2 p-2 rounded-sm h-11/12 flex items-center gap-6">
                            <BsCash className="text-3xl text-red-500 ms-8"></BsCash>
                            <div className="flex flex-col mt-4">
                                <p className="text-xs text-gray-600 mb-1">Pembaca Penagihan</p>
                                <h2 className="text-green-500 mb-4 font-bold text-2xl">Rp.0</h2>
                            </div>
                        </div>
                    </div>
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

                <div className="bg-stone-50 w-full h-12 mt-4 flex justify-between items-center py-6 px-12  text-xs font-bold">
                    <p>No.</p>
                    <p>Deskripsi</p>
                    <p>Nilai</p>
                    <p>Status</p>
                    <p>Tipe</p>
                    <p>Tanggal</p>
                </div>

                <div className="bg-stone-50 w-full h-64 flex justify-center items-center">
                    <p className="flex gap-4 justify-center items-center text-xl text-gray-300"><BsInfoCircle />Tidak ada aktifitas dalam rentang tanggal ini</p>
                </div>
            </div>
        </>
    );
}