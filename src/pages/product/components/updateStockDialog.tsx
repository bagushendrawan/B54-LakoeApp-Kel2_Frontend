import { ChangeEvent, FC, useRef, useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/dialog';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

interface IProduct {
    id: string;
    name: string;
    description: string;
    attachments: string[];
    is_active: boolean;
    variants: string;
    size: string;
    minimum_order: string
    store_id: string;
    categories_id: string;
    created_at: Date;
    updated_at: Date;
}

interface IUpdatePriceProps {
    product: IProduct;
    updatePrice: (id: string, newPrice: string) => void;
}

const UpdateStockDialog: FC<IUpdatePriceProps> = ({ product, updatePrice }) => {
    // const [stock, setStock] = useState<string>(product.stock.toString());
    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleSave = () => {
        // const numericStock = parseFloat(stock.replace(/,/g, ''));
        // if (!isNaN(numericStock)) {
        //     updatePrice(product.id, numericStock);
        //     if (dialogRef.current) {
        //         dialogRef.current.close();
        //     }
        // }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className='rounded-full'>Ubah Stok</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold">Ubah Stok</DialogTitle>
                    <DialogDescription className="text-sm">
                        Ubah stok untuk produk <span className="font-bold">{product.name}</span>
                    </DialogDescription>
                    <Input
                        type="text"
                        className="border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder='Cari Produk'
                        // value={stock}
                        // onChange={(e: ChangeEvent<HTMLInputElement>) => setStock(e.target.value)}
                    />
                </DialogHeader>
                <DialogFooter>
                    <div className="flex justify-end space-x-2 mt-4">
                        <DialogClose asChild>
                            <Button type="button" variant="outline" className='rounded-full'>
                                Batalkan
                            </Button>
                        </DialogClose>

                        <DialogClose asChild>
                            <Button
                                type="submit"
                                onClick={handleSave}
                                className="px-4 py-2 text-white bg-blue-500 rounded-full"
                            >
                                Simpan
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateStockDialog;