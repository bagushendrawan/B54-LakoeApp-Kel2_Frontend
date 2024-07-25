import { Button } from "@/components/button";
import { Label } from "@/components/label";
import AddCategoriesDialog from "./addCategoriesDialog";
import AddVoucherDialog from "./addVoucherDialog";

const Navbar = () => {
    return (
        <div className="w-full flex items-center p-4 px-8 bg-[#28DF99] fixed z-50 shadow-lg">
            <div className="flex flex-1">
                <Label className="text-2xl font-bold">
                    Lakoe Admin
                </Label>
            </div>

            <div className="flex items-center gap-2">
                <AddCategoriesDialog />
                <AddVoucherDialog />
            </div>
        </div>
    );
};

export default Navbar;