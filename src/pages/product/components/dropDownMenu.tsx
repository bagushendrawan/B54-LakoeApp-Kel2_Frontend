"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { FaEllipsisH } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { LuCopy } from "react-icons/lu";
import DeleteProductDialog from "./deleteProductDialog";
import { FC } from "react";

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

interface IDropDownMenuProps {
    product: IProduct;
}

const DropDownMenu: FC<IDropDownMenuProps> = ({ product }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} className="rounded-full">
                    <FaEllipsisH />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 flex flex-col gap-2">
                <Button className="w-full gap-2">
                    <TbEdit size={'1.3rem'} />
                    Edit Produk
                </Button>
                <Button className="w-full gap-2">
                    <LuCopy size={'1.3rem'} />
                    Duplikat Produk
                </Button>
                <DeleteProductDialog product={product} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropDownMenu;