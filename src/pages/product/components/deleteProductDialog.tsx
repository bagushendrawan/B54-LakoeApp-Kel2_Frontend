import { FC } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/dialog';
import { Button } from '@/components/button';
import { MdOutlineDelete } from 'react-icons/md';

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
}

const DeleteProductDialog: FC<IUpdatePriceProps> = ({ product }) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full gap-2">
                    <MdOutlineDelete size={'1.3rem'} />
                    Hapus Produk
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold">Hapus Produk?</DialogTitle>
                    <DialogDescription>
                        <p className="text-xl text-black">Produk <span className="font-bold">{product.name}</span> akan dihapus</p>

                        <p className="mt-6">
                        Produk yang dihapus tidak akan bisa dibatalkan. Pastikan produk yang kamu pilih itu sudah benar.
                    </p>
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
                            >
                                Ya, Hapus
                            </Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteProductDialog;