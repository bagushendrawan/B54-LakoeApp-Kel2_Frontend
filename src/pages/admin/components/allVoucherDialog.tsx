import { Button } from "@/components/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/dialog";
import useStore from "@/z-context";
import { useEffect } from "react";
import Axios from "axios";
import { Label } from "@/components/label";
import { FaTrash } from "react-icons/fa";
import DeleteVoucherDialog from "./deleteVoucherDialog";

const AllVoucherDialog = () => {
    const setVoucher = useStore((state) => state.SET_VOUCHER);
    const voucher = useStore((state) => state.voucher);

    // fetch categories
    useEffect(() => {
        const fetchCategories = async () => {
            const token = localStorage.getItem('token');
            const res = await Axios({
                method: 'get',
                url: 'http://localhost:3000/voucher',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setVoucher(res.data);
        };
        fetchCategories();
    }, [voucher]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="px-4 py-2 text-white bg-blue-500 rounded-full"
                >
                    Lihat Semua Voucher
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Daftar Voucher</DialogTitle>
                    <DialogDescription>
                        {voucher.length !== 0 ? (
                            <div className="w-full max-h-96 flex flex-col gap-2 mt-4 overflow-y-auto">
                                {voucher.map((item) => (
                                    <div className="flex items-center gap-2 text-black">
                                        <div className="w-full flex flex-col p-4 border rounded shadow-lg">
                                            <Label className="text-xl font-bold">
                                                Rp{item.nominal}
                                            </Label>
                                            <Label className="w-full flex justify-end text-xl">
                                                {item.code}
                                            </Label>
                                        </div>
                                        <DeleteVoucherDialog voucher={item} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Label>Belum ada voucher</Label>
                        )}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AllVoucherDialog;