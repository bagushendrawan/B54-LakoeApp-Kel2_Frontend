import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/dialog';
import { Button } from '@/components/button';
import { BiMoneyWithdraw } from "react-icons/bi";
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';
import { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { useToast } from '@/components/use-toast';

const WithdrawDialog = () => {
    const [registedBank, setRegistedBank] = useState<IBankAccount[]>([
        {
            id: '1',
            bank: "BCA",
            acc_number: "0970664656",
            acc_name: "Test 1",
            store_id: "1",
            created_at: new Date('2024-07-18T07:28:43.027Z'),
            updated_at: new Date('2024-07-18T07:28:43.027Z')
        },
        {
            id: '2',
            bank: "BRI",
            acc_number: "0938578656",
            acc_name: "Test 2",
            store_id: "1",
            created_at: new Date('2024-07-18T07:28:43.027Z'),
            updated_at: new Date('2024-07-18T07:28:43.027Z')
        },
        {
            id: '3',
            bank: "BSI",
            acc_number: "985364656",
            acc_name: "Test 3",
            store_id: "1",
            created_at: new Date('2024-07-18T07:28:43.027Z'),
            updated_at: new Date('2024-07-18T07:28:43.027Z')
        },
    ]);

    const [selectedBankDetail, setSelectedBankDetail] = useState<IBankAccount | null>();

    const handleSelectBank = (value: string) => {
        const selectedBankDetail = registedBank.find(bank => bank.bank === value);
        setSelectedBankDetail(selectedBankDetail || null);
    };

    const { toast } = useToast();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full gap-2 bg-[#22C55E]">
                    <BiMoneyWithdraw size={'1.3rem'} />
                    Tarik Saldo
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold mb-4">Mau Tarik Saldo?</DialogTitle>
                    <DialogDescription className='flex flex-col gap-4 text-black'>
                        {/* nominal */}
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='nominal'>
                                Berapa nominal yang mau ditarik?
                                <span className='text-red-600'> *</span>
                            </Label>
                            <Input
                                type='text'
                                id='nominal'
                                placeholder='Masukan Nominal'
                            />
                        </div>

                        {/* bank */}
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor='nominal'>
                                Pilih Akun Bank
                                <span className='text-red-600'> *</span>
                            </Label>
                            <Select onValueChange={handleSelectBank}>
                                <SelectTrigger id='bank' className="w-full">
                                    <SelectValue placeholder='Pilih Akun Bank' />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectGroup>
                                        <SelectLabel>
                                            <Label>Akun Bank Terdaftar</Label>
                                        </SelectLabel>
                                        {registedBank.map((bank) => (
                                            <SelectItem value={bank.bank}>
                                                {bank.bank}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {selectedBankDetail ? (
                            <div className='flex flex-col gap-2'>
                                <Label>Detail Bank</Label>
                                <div className='flex items-center gap-2 border rounded-md p-2 px-4'>
                                    <p className='italic'>{selectedBankDetail.bank}</p>
                                    <GoDotFill />
                                    <p className='italic'>{selectedBankDetail.acc_number}</p>
                                    <GoDotFill />
                                    <p className='italic'>{selectedBankDetail.acc_name}</p>
                                </div>

                                <Label className='text-red-600 italic'>* Pastikan data bank sudah sesuai sebelum melanjutkan</Label>
                            </div>
                        ) : (
                            <Label className='text-red-600 italic'>* Silahkna pilih akun bank terlebih dahulu</Label>
                        )}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div className="flex justify-end space-x-2 mt-4">
                        <DialogClose asChild>
                            <Button type="button" variant="outline" className='rounded-full'>
                                Batalkan
                            </Button>
                        </DialogClose>

                        <DialogClose>
                            <Button
                                className="px-4 py-2 text-white bg-blue-500 rounded-full"
                                onClick={() => {
                                    toast({
                                        description: "",
                                    });
                                }}
                            >
                                Tarik Saldo
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default WithdrawDialog;