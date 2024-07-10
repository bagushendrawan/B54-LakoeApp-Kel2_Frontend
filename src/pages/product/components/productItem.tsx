import { Button } from "@/components/ui/button";
import { FC } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { LuLink } from "react-icons/lu";

interface IProduct {
    id: number;
    image: string;
    name: string;
    price: number;
    stock: number;
    sku: string;
    active: boolean;
}

interface IProductItemProps {
    product: IProduct;
    onToggle: (id: number) => void;
}

const ProductItem: FC<IProductItemProps> = ({ product, onToggle }) => {
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
                            style={{
                                transform: 'scale(1.3)'
                            }}
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
                                <Button variant={'outline'} className="rounded-full">Ubah Harga</Button>
                                <Button variant={'outline'} className="rounded-full">Ubah Stok</Button>
                                <Button variant={'outline'} className="gap-2 rounded-full">
                                    <LuLink />
                                    Lihat Halaman
                                </Button>
                                <Button variant={'outline'} className="rounded-full">
                                    <FaEllipsisH />
                                </Button>
                            </div>

                            <div>
                                <label className="switch">
                                    <input type="checkbox" checked={product.active} onChange={() => onToggle(product.id)} />
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