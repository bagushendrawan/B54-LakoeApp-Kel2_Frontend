import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaChevronDown } from 'react-icons/fa';
import { LuPackageSearch } from "react-icons/lu";

const Product = () => {
    const categories = [
        'Semua Kategori',
        'Audio, Kamera & Elektronik',
        'Buku',
        'Dapur',
        'Fashion Anak & Bayi',
        'Fashion Muslim',
        'Fashion Pria',
        'Fashion Wanita',
    ];

    const sortingOptions = [
        'Terakhir Diubah',
        'Terlaris',
        'Kurang Diminati',
        'Harga Tertinggi',
        'Harga Terendah',
        'Stok Terbanyak',
        'Stok Tersedikit',
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(categories[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    // sort
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState<string>(sortingOptions[0]);

    const toggleSortDropdown = () => {
        setIsSortOpen(!isOpen);
    };

    const handleOptionClickSort = (option: string) => {
        setSelectedSortOption(option);
        setIsSortOpen(false);
    };

    return (
        <div>
            <div className="w-full flex justify-between items-center">
                <h3 className="font-bold text-2xl">Daftar Produk</h3>

                <Button className="gap-2 rounded-full bg-[#0086B4]">
                    <CiCirclePlus size={'1.3rem'} />
                    Tambah Produk
                </Button>
            </div>

            <div className="flex gap-4 mt-4 border-b-[2px] border-[#E6E6E6]">
                <p className="cursor-pointer">Semua</p>
                <p className="cursor-pointer">Aktif</p>
                <p className="cursor-pointer">Nonaktif</p>
            </div>

            <div className="flex space-x-4 p-4">
                {/* search field */}
                <div className="w-full relative flex items-center">
                    <span className="absolute left-3 text-gray-500">
                        <LuPackageSearch size={'1.5rem'} />
                    </span>
                    <input
                        type="text"
                        className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={'Cari Produk'}
                    />
                </div>

                {/* dropdown 1 */}
                <div className="w-full relative inline-block">
                    <div className="flex items-center border rounded px-3 py-2 cursor-pointer" onClick={toggleDropdown}>
                        <span>{selectedOption}</span>
                        <FaChevronDown className="ml-auto text-gray-500" />
                    </div>
                    {isOpen && (
                        <div className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10">
                            {categories.map((option) => (
                                <div
                                    key={option}
                                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    <input type="checkbox" className="mr-2" checked={selectedOption === option} readOnly />
                                    <span>{option}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* dropdown 2 */}
                <div className="w-full relative inline-block">
                    <div className="flex items-center border rounded px-3 py-2 cursor-pointer" onClick={toggleSortDropdown}>
                        <span>{selectedSortOption}</span>
                        <FaChevronDown className="ml-auto text-gray-500" />
                    </div>
                    {isSortOpen && (
                        <div className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10">
                            {sortingOptions.map((option) => (
                                <div
                                    key={option}
                                    className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer ${selectedSortOption === option ? 'bg-blue-50' : ''
                                        }`}
                                    onClick={() => handleOptionClickSort(option)}
                                >
                                    <span className="flex-1">{option}</span>
                                    {selectedSortOption === option && <span className="text-blue-500 ml-2">•</span>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
