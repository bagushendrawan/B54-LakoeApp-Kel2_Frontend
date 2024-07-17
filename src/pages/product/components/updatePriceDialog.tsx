import { ChangeEvent, FC, useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/dialog';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

interface IVariantOptionValues {
    id: string;
    variant_option_id: string;
    sku: string;
    weight: number;
    stock: number;
    price: number;
    is_active: boolean;
    img?: string;
    created_at: Date;
    updated_at: Date;
}

interface IVariantOptions {
    id: string;
    name: string;
    variant_id: string;
    variant_option_values: IVariantOptionValues;
    created_at: Date;
    updated_at: Date;
}

interface IVariants {
    id: string;
    name: string;
    is_active: boolean;
    product_id: string;
    variant_option: IVariantOptions[];
    created_at: Date;
    updated_at: Date;
}

interface IProduct {
    id: string;
    name: string;
    description?: string;
    attachments: string[];
    is_active: boolean;
    variants: IVariants[];
    size: string;
    minimum_order: string;
    store_id?: string;
    categories_id?: string;
    created_at: Date;
    updated_at: Date;
}

interface IUpdatePriceProps {
    product: IProduct;
    updatePrice: (id: string, newPrice: string) => void;
}

const UpdatePriceDialog: FC<IUpdatePriceProps> = ({ product, updatePrice }) => {
    // const [price, setPrice] = useState<string>(product.price.toString());

    const handleSave = () => {
        // const numericPrice = parseFloat(price.replace(/,/g, ''));
        // if (!isNaN(numericPrice)) {
        //     updatePrice(product.id, numericPrice);
        // }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className='rounded-full'>Ubah Harga</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold">Ubah Harga</DialogTitle>
                    <DialogDescription className="text-sm">
                        Ubah harga untuk produk <span className="font-bold">{product.name}</span>
                    </DialogDescription>

                    <div className="relative flex items-center w-full">
                        <span className="absolute left-3">
                            Rp
                        </span>
                        <Input
                            type="text"
                            className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder='Cari Produk'
                            // value={}
                            // onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
                        />
                    </div>
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

export default UpdatePriceDialog;