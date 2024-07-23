import { Button } from "@/components/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/dialog";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useToast } from "@/components/use-toast";
import useStore from "@/z-context";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsPlus } from "react-icons/bs";
import dataBank from "../../../assets/json/dataBank.json";
import EditBankDialog from "./editBankDialog";

const AddBankAccountDialog = () => {
    const { toast } = useToast();
    const user = useStore((state) => state.user);
    const [bankData, setBankData] = useState<bankData>();
    useEffect(() => {
        async function fetchBank() {
            const response = await axios({
                method: "get",
                url: `http://localhost:3000/users/bank`,
                data: user.store_id,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            });
            setBankData(response.data);
            console.log("bank", response.data);
        }
        fetchBank();
    }, []);

    const formBank = useForm<bankData>();
    async function onSubmit(data: bankData) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        try {
            console.log("data", data);
            const response = await axios({
                method: "patch",
                url: `http://localhost:3000/users/bank`,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            });
            console.log(response.data);
            setBankData(response.data);
            toast({
                variant: "success",
                title: `Bank Updated!`
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

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchBank = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredBanks = dataBank.filter(bank =>
        bank.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full bg-[#22C55E] hover:bg-green-600">
                    <BsPlus size={'1.3rem'} />
                    Tambah Bank
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Tambahkan Akun Bank</DialogTitle>
                    <DialogDescription>
                        <form className="mt-4">
                            <div className="flex flex-col text-black gap-4">
                                {/* bank */}
                                <div className='flex flex-col gap-2'>
                                    <Label htmlFor='bank'>
                                        Bank
                                        <span className='text-red-600'> *</span>
                                    </Label>
                                    <Select>
                                        <SelectTrigger id='bank' className="w-full">
                                            <SelectValue placeholder='Pilih Bank' />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            <SelectGroup>
                                                <SelectLabel>
                                                    <Input
                                                        type='text'
                                                        placeholder='Cari Bank'
                                                        value={searchTerm}
                                                        onChange={handleSearchBank}
                                                    />
                                                </SelectLabel>
                                                {filteredBanks.map((bank) => (
                                                    <SelectItem value={bank.name}>
                                                        {bank.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Rekening */}
                                <div className="flex flex-col gap-4">
                                    <Label htmlFor="username">
                                        Rekening
                                        <span className='text-red-600'> *</span>
                                    </Label>
                                    <Input
                                        id="nomor_rekening"
                                        placeholder="Masukan Rekening"
                                        {...formBank.register("acc_number")}
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
                                        placeholder="Masukan Nama"
                                        {...formBank.register("acc_name")}
                                        className="col-span-3"
                                    />
                                </div>

                                <Label className="mt-2 text-red-600 italic">* Setiap user maksimal 3 akun bank</Label>
                            </div>
                        </form>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div className="w-full flex justify-end gap-2 mt-4">
                        <DialogClose asChild>
                            <Button type="button" variant="outline" className='rounded-full'>
                                Batalkan
                            </Button>
                        </DialogClose>

                        <DialogClose asChild>
                            <Button
                                onClick={formBank.handleSubmit(onSubmit)}
                                className="px-4 py-2 text-white bg-blue-500 rounded-full"
                            >
                                Tambah Bank
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddBankAccountDialog;