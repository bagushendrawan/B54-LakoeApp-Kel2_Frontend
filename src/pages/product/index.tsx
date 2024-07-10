import { ChangeEvent, useState } from "react";
import IconInput from "./components/iconInput";
import Dropdown from "./components/dropDown";
import ProductItem from "./components/productItem";
import { Button } from "@/components/ui/button";
import { CiCirclePlus } from "react-icons/ci";

const Product = () => {
    const categories = ["Semua Kategori", "Audio, Kamera & Elektronik", "Buku", "Dapur", "Fashion Anak & Bayi", "Fashion Muslim", "Fashion Pria", "Fashion Wanita"];

    const sortingOptions = ["Terakhir Diubah", "Terlaris", "Kurang Diminati", "Harga Tertinggi", "Harga Terendah", "Stok Terbanyak", "Stok Tersedikit"];

    const [products, setProducts] = useState([
        {
            id: 1,
            image: "https://via.placeholder.com/150",
            name: "Kaos",
            price: 55000,
            stock: 200,
            sku: "0219AKD192",
            active: true,
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            name: "Celana",
            price: 100000,
            stock: 80,
            sku: "0219AKD192",
            active: true,
        },
        {
            id: 3,
            image: "https://via.placeholder.com/150",
            name: "Sepatu",
            price: 180000,
            stock: 90,
            sku: "0219AKD192",
            active: true,
        },
        {
            id: 4,
            image: "https://via.placeholder.com/150",
            name: "Kemeja",
            price: 80000,
            stock: 120,
            sku: "0219AKD192",
            active: true,
        },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
    const [selectedSort, setSelectedSort] = useState("Terlaris");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleToggle = (id: number) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, active: !product.active } : product
            )
        );
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Daftar Produk</h1>
                <Button className="gap-2 rounded-full bg-[#0086B4]">
                    <CiCirclePlus size={"1.3rem"} />
                    Tambah Produk
                </Button>
            </div>
            <div className="flex space-x-4 mb-4 border-b">
                <button className="text-blue-500 border-b-2 border-blue-500 pb-2">Semua</button>
                <button className="text-gray-500">Aktif</button>
                <button className="text-gray-500">Nonaktif</button>
            </div>
            <div className="flex space-x-4 mb-4">
                <IconInput value={searchTerm} onChange={handleSearchChange} />
                <Dropdown options={categories} selectedOption={selectedCategory} onSelect={setSelectedCategory} />
                <Dropdown options={sortingOptions} selectedOption={selectedSort} onSelect={setSelectedSort} />
            </div>

            <div className="flex items-center mb-2">
                <p className="flex flex-1 text-xl font-bold">{filteredProducts.length} Produk</p>
                <div className="flex items-center gap-2">
                    <p>Pilih Semua</p>
                    <input
                        type="checkbox"
                        style={{
                            transform: "scale(1.3)"
                        }}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {filteredProducts.map((product) => (
                    <ProductItem key={product.id} product={product} onToggle={handleToggle} />
                ))}
            </div>
        </div>
    );
};

export default Product;
