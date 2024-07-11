import { Button } from "@/components/ui/button";
import { FC } from "react";
import { GoDotFill } from "react-icons/go";
import { LuLink } from "react-icons/lu";
import UpdatePriceDialog from "./updatePriceDialog";
import UpdateStockDialog from "./updateStockDialog";
import DropDownMenu from "./dropDownMenu";

interface IProduct {
    id: number;
    image: string;
    name: string;
    price: number;
    stock: number;
    sku: string;
    is_active: boolean;
}

interface IProductItemProps {
    product: IProduct;
    onToggle: (id: number) => void;
    onUpdatePrice: (id: number, newPrice: number) => void;
    onUpdateStock: (id: number, newStock: number) => void;
}

const ProductItem: FC<IProductItemProps> = ({ product, onToggle, onUpdatePrice, onUpdateStock }) => {
    const handleUpdatePrice = (newPrice: number) => {
        onUpdatePrice(product.id, newPrice);
    };

    const handleUpdateStock = (newStock: number) => {
        onUpdateStock(product.id, newStock);
    };

    return (
        <div className="w-full border p-4 rounded shadow-md">
            <div className="w-full flex items-center gap-4">
                <img
                    src={product.image}
                    alt={product.name}
                    width={'90rem'}
                />

                <div className="w-full">
                    <div className="flex">
                        <p className="flex flex-1 text-xl font-bold">{product.name}</p>
                        <input
                            type="checkbox"
                            className="w-4 h-4"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[18px]">
                            <p className="font-[600]">Rp{product.price}</p>
                            <GoDotFill fill="#909090" size={'.8rem'} />
                            <p className="text-gray-500">Stock : {product.stock}</p>
                            <GoDotFill fill="#909090" size={'.8rem'} />
                            <p className="text-gray-500">SKU : {product.sku}</p>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-1 items-center gap-2">
                                <UpdatePriceDialog product={product} updatePrice={handleUpdatePrice} />
                                <UpdateStockDialog product={product} updatePrice={handleUpdateStock} />
                                <Button variant={'outline'} className="gap-2 rounded-full">
                                    <LuLink />
                                    Lihat Halaman
                                </Button>
                                <DropDownMenu product={product} />
                            </div>

                            <div>
                                <label className="switch">
                                    <input type="checkbox" checked={product.is_active} onChange={() => onToggle(product.id)} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;