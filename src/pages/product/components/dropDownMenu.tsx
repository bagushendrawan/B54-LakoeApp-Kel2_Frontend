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

interface IProduct {
    id: number;
    image: string;
    name: string;
    price: number;
    stock: number;
    sku: string;
    is_active: boolean;
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