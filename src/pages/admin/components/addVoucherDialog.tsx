import { Button } from "@/components/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import useStore from "@/z-context";
import { useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import Axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AllVoucherDialog from "./allVoucherDialog";

const addVoucherSchema = z.object({
    nominal: z.preprocess((val) => parseInt(val as string, 10), z.number()),
    code: z.string().min(3, { message: 'Masukan kode' })
});

const AddVoucherDialog = () => {
    const user = useStore((state) => state.user);

    const formAddVoucher = useForm<IAddVoucher>({
        mode: 'onSubmit',
        resolver: zodResolver(addVoucherSchema)
    });

    const handleAddVoucher = async (data: any) => {
        const token = localStorage.getItem('token');
        const userId = user.id;

        const newData = {
            ...data
        };

        await Axios({
            method: 'post',
            url: `http://localhost:3000/voucher/${userId}`,
            data: newData,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        formAddVoucher.reset();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full">
                    <BsPlus size={'1.3rem'} />
                    Buat Voucher
                </Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={formAddVoucher.handleSubmit(handleAddVoucher)}>
                    <DialogHeader>
                        <DialogTitle>Buat Voucher Baru</DialogTitle>
                        <DialogDescription>
                            <div className="flex flex-col text-black gap-4 mt-4">
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="nominal">
                                        Nominal Voucher
                                        <span className='text-red-600'> *</span>
                                    </Label>
                                    <Input
                                        id="nominal"
                                        placeholder="Masukan nominal"
                                        {...formAddVoucher.register("nominal")}
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="code">
                                        Kode Voucher
                                        <span className='text-red-600'> *</span>
                                    </Label>
                                    <Input
                                        id="code"
                                        placeholder="Masukan kode"
                                        {...formAddVoucher.register("code")}
                                    />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <div className="w-full flex items-center mt-8">
                            <div className="flex flex-1">
                                <AllVoucherDialog />
                            </div>

                            <div className="w-full flex justify-end gap-2">
                                <DialogClose asChild>
                                    <Button type="button" variant="outline" className='rounded-full'>
                                        Batalkan
                                    </Button>
                                </DialogClose>

                                <DialogClose asChild>
                                    <Button
                                        type="submit"
                                        className="px-4 py-2 text-white bg-blue-500 rounded-full"
                                    >
                                        Buat Voucher
                                    </Button>
                                </DialogClose>
                            </div>
                        </div>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddVoucherDialog;