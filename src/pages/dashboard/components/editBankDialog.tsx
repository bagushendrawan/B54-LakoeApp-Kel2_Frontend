import { Button } from "@/components/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { FC } from "react";

interface IBank {
    bank: IBankAccount;
}

const EditBankDialog: FC<IBank> = ({ bank }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Label className="cursor-pointer">
                    Edit Bank
                </Label>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Akun Bank</DialogTitle>
                    <DialogDescription>
                        <form className="mt-4">
                            <div className="flex flex-col text-black gap-4">
                                {/* bank */}
                                <div className='flex flex-col gap-2'>
                                    <Label htmlFor='bank'>
                                        Bank
                                        <span className='text-red-600'> *</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        defaultValue={bank.bank}
                                        placeholder="Masukan Bank"
                                    />
                                </div>

                                {/* Rekening */}
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="username">
                                        Rekening
                                        <span className='text-red-600'> *</span>
                                    </Label>
                                    <Input
                                        id="nomor_rekening"
                                        defaultValue={bank.acc_number}
                                        placeholder="Masukan Rekening"
                                        className="col-span-3"
                                    />
                                </div>

                                {/* Nama */}
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="name">
                                        Nama
                                        <span className='text-red-600'> *</span>
                                    </Label>
                                    <Input
                                        id="nama_rekening"
                                        defaultValue={bank.acc_name}
                                        placeholder="Masukan Nama"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                        </form>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div className="w-full flex items-center mt-4">
                        <div className="flex flex-1">
                            <DialogClose>
                                <Button type="button" className='bg-red-600 hover:bg-red-700 rounded-full'>
                                    Hapus Bank
                                </Button>
                            </DialogClose>
                        </div>

                        <div className="w-full flex justify-end gap-2">
                            <DialogClose asChild>
                                <Button type="button" variant="outline" className='rounded-full'>
                                    Batalkan
                                </Button>
                            </DialogClose>

                            <DialogClose asChild>
                                <Button
                                    // onClick={formBank.handleSubmit(onSubmit)}
                                    className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full"
                                >
                                    Simpan
                                </Button>
                            </DialogClose>
                        </div>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    );
};

export default EditBankDialog;