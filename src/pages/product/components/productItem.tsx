import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LuLink } from "react-icons/lu";
import UpdatePriceDialog from "./updatePriceDialog";
import UpdateStockDialog from "./updateStockDialog";
import DropDownMenu from "./dropDownMenu";
import { Input } from "@/components/input";
import ActivateProductDialog from "./activateProductDialog";

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

interface IProductItemProps {
    product: IProduct;
    onToggle: (id: string) => void;
    onUpdatePrice: (id: string, newPrice: string) => void;
    onUpdateStock: (id: string, newStock: string) => void;
    onChecked: (id: string, isChecked: boolean) => void;
    selectedAll: boolean;
}

const ProductItem: FC<IProductItemProps> = ({
    product, onUpdatePrice, onUpdateStock, onChecked, selectedAll
}) => {
    const handleUpdatePrice = (newPrice: string) => {
        // onUpdatePrice(product.id, newPrice);
    };

    const handleUpdateStock = (newStock: string) => {
        // onUpdateStock(product.id, newStock);
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(prevIsChecked => {
            const newIsChecked = !prevIsChecked;
            onChecked(product.id, newIsChecked);
            return newIsChecked;
        });
    };

    return (
        <div className="w-full border p-4 rounded shadow-md">
            <div className="w-full flex items-center gap-4">
                {/* product image */}
                <img
                    src={product.variants[0].variant_option[0].variant_option_values.img}
                    alt={product.name}
                    width={'90rem'}
                />

                <div className="w-full">
                    <div className="flex">
                        {/* product name */}
                        <p className="flex flex-1 text-xl font-bold">{product.name}</p>

                        {/* checkbox */}
                        <Input
                            type="checkbox"
                            className="w-4 h-4"
                            checked={selectedAll ? selectedAll : isChecked}
                            onClick={handleCheck}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[18px]">
                            <p className="font-[600]">
                                Rp{product.variants[0].variant_option[0].variant_option_values.price}
                            </p>
                            <GoDotFill fill="#909090" size={'.8rem'} />
                            <p className="text-gray-500">Stock : {product.variants[0].variant_option[0].variant_option_values.stock}</p>
                            <GoDotFill fill="#909090" size={'.8rem'} />
                            <p className="text-gray-500">SKU : {product.variants[0].variant_option[0].variant_option_values.sku}</p>
                        </div>

                        <div className={`flex items-center ${product.is_active ? 'justify-center' : 'justify-end'}`}>
                            {product.is_active && (
                                <div className="flex flex-1 items-center gap-2">
                                    <UpdatePriceDialog product={product} updatePrice={handleUpdatePrice} />
                                    <UpdateStockDialog product={product} updatePrice={handleUpdateStock} />
                                    <Button variant={'outline'} className="gap-2 rounded-full">
                                        <LuLink />
                                        Lihat Halaman
                                    </Button>
                                    <DropDownMenu product={product} />
                                </div>
                            )}

                            {/* activate product */}
                            <ActivateProductDialog product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;