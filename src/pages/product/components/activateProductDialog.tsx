import { FC, useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/dialog';
import { Button } from '@/components/button';
import { Label } from '@/components/label';
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

interface IActivateProductProps {
    product: IProduct;
}

const ActivateProductDialog: FC<IActivateProductProps> = ({ product }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(product.is_active);

    const handleCheckboxChange = () => {
        if (isChecked) {
            setIsChecked(false);
        } else {
            setIsDialogOpen(true);
        }
    };

    const handleActivateClick = () => {
        setIsChecked(true);
        setIsDialogOpen(false);
    };

    const variant = [
        {
            color: 'Blue',
            size: 'S'
        },
        {
            color: 'Blue',
            size: 'L'
        },
        {
            color: 'Blue',
            size: 'XL'
        }
    ]

    return (
        <div>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className="slider round"></span>
            </label>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-lg font-bold">Aktifkan Produk?</DialogTitle>
                        <DialogDescription>
                            <label className='text-black'>Produk <span className='font-bold'>{product.name}</span></label>
                            <div className='flex flex-col gap-4 text-black mt-4'>
                                {variant.map((item) => (
                                    <div className='flex flex-col gap-1'>
                                        <Label>
                                            {item.color} - {item.size}
                                        </Label>
                                        <div className='w-ful flex gap-2'>
                                            <div className='w-full'>
                                                <label>
                                                    Harga
                                                    <span className='text-red-600'> *</span>
                                                </label>
                                                <div className='relative flex items-center gap-2'>
                                                    <p className='absolute top-2.5 left-2 text-md font-bold'>Rp</p>
                                                    <Input
                                                        type='text'
                                                        className='pl-8'
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-full'>
                                                <label>
                                                    Stock
                                                    <span className='text-red-600'> *</span>
                                                </label>
                                                <Input
                                                    type='text'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
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
                                    className="px-4 py-2 text-white bg-blue-500 rounded-full"
                                    onClick={handleActivateClick}
                                >
                                    Ya, Aktifkan
                                </Button>
                            </DialogClose>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ActivateProductDialog;
