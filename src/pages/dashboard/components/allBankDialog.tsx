import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/dialog";
import { Label } from "@/components/label";
import { useState } from "react";
import EditBankDialog from "./editBankDialog";

const AllBankDialog = () => {
    const [registedBank, setRegistedBank] = useState<IBankAccount[]>([
        {
            id: '1',
            bank: "BCA",
            acc_number: "0970664656",
            acc_name: "Endang Triyana",
            store_id: "1",
            created_at: new Date('2024-07-18T07:28:43.027Z'),
            updated_at: new Date('2024-07-18T07:28:43.027Z')
        },
        {
            id: '2',
            bank: "BRI",
            acc_number: "0938578656",
            acc_name: "Endang Triyana",
            store_id: "1",
            created_at: new Date('2024-07-18T07:28:43.027Z'),
            updated_at: new Date('2024-07-18T07:28:43.027Z')
        },
        {
            id: '3',
            bank: "BNI",
            acc_number: "985364656",
            acc_name: "Endang Triyana",
            store_id: "1",
            created_at: new Date('2024-07-18T07:28:43.027Z'),
            updated_at: new Date('2024-07-18T07:28:43.027Z')
        },
    ]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Label className="cursor-pointer text-[#22C55E]">Lihat Semua</Label>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Akun Bank Terdaftar</DialogTitle>
                    <DialogDescription>
                        <div className="w-full flex flex-col gap-2 mt-4">
                            {registedBank.map((bank) => (
                                <div className="relative w-full p-4 border rounded">
                                    <div className="flex flex-col gap-4 text-black ">
                                        <Label className="text-xl">{bank.bank}</Label>
                                        <Label className="">{bank.acc_number}</Label>
                                        <Label className="text-end">a/n {bank.acc_name}</Label>
                                    </div>

                                    <div className="absolute top-2 right-2">
                                        <EditBankDialog bank={bank} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AllBankDialog;