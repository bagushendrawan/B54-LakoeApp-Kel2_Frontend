/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import IconInput from "./components/iconInput";
import Dropdown from "./components/dropDownSort";
import ProductItem from "./components/productItem";
import { Button } from "@/components/ui/button";
import { CiCirclePlus } from "react-icons/ci";
import { LuPackageX } from "react-icons/lu";
import BulkDeleteProductDialog from "./components/bulkDeleteProductDialog";
import BulkNonactivateProductDialog from "./components/bulkNonactivateProductDialog";
import { Link } from "@tanstack/react-router";
import axios from "axios";

interface IProductBe {
    id: string;
    name: string;
    description: string;
    attachments: string[];
    is_active: boolean;
    variants: string;
    size: string;
    minimum_order: string
    store_id: string;
    categories_id: string;
    created_at: Date;
    updated_at: Date;
}

const Product = () => {
    const categories = [
        "Semua Kategori",
        "Audio, Kamera & Elektronik",
        "Buku",
        "Dapur",
        "Fashion Anak & Bayi",
        "Fashion Muslim",
        "Fashion Pria",
        "Fashion Wanita"
    ];

    const action = [
        "Terakhir Diubah",
        "Terlaris",
        "Kurang Diminati",
        "Harga Tertinggi",
        "Harga Terendah",
        "Stok Terbanyak",
        "Stok Tersedikit"
    ];

    const [productBe, setProductBe] = useState<IProductBe[]>();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:3000/product/all/3247e115-6d9f-4d5a-948b-e80e306506a4');

                setProductBe(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, []);

    console.log(productBe);

    const [products, setProducts] = useState([
        {
            id: 1,
            image: "https://via.placeholder.com/150",
            name: "Kaos",
            category: "fashion pria",
            price: 55000,
            stock: 200,
            sku: "0219AKD192",
            is_active: true,
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            name: "Celana",
            category: "fashion wanita",
            price: 100000,
            stock: 80,
            sku: "0219AKD192",
            is_active: true,
        },
        {
            id: 3,
            image: "https://via.placeholder.com/150",
            name: "Sepatu",
            category: "fashion anak & bayi",
            price: 180000,
            stock: 90,
            sku: "0219AKD192",
            is_active: false,
        },
        {
            id: 4,
            image: "https://via.placeholder.com/150",
            name: "Kemeja",
            category: "fashion pria",
            price: 80000,
            stock: 120,
            sku: "0219AKD192",
            is_active: true,
        },
    ]);

    const [isActive, setIsActive] = useState<boolean | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
    const [selectedAction, setSelectedAction] = useState("Terlaris");

    const handleSortIsActive = (status: boolean | null) => {
        setIsActive(status);
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleToggle = (id: string) => {
        // setProducts((prevProducts) =>
        //     prevProducts.map((product) =>
        //         product.id === id ? { ...product, active: !product.is_active } : product
        //     )
        // );
    };

    const handleSortCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const handleSortAction = (action: string) => {
        setSelectedAction(action);
    };

    const sortProducts = (products: any[]) => {
        switch (selectedAction) {
            case "Terakhir Diubah":
                return products; // Implement sorting logic here if you have the last modified date
            case "Terlaris":
                return products; // Implement sorting logic here if you have sales data
            case "Kurang Diminati":
                return products; // Implement sorting logic here if you have sales data
            case "Harga Tertinggi":
                return [...products].sort((a, b) => b.price - a.price);
            case "Harga Terendah":
                return [...products].sort((a, b) => a.price - b.price);
            case "Stok Terbanyak":
                return [...products].sort((a, b) => b.stock - a.stock);
            case "Stok Tersedikit":
                return [...products].sort((a, b) => a.stock - b.stock);
            default:
                return products;
        }
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesIsActive = isActive === null || product.is_active === isActive;
        const matchesCategory = selectedCategory === "Semua Kategori" || product.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearchTerm && matchesIsActive && matchesCategory;
    });

    const sortedAndFilteredProducts = sortProducts(filteredProducts);

    const handleUpdatePrice = (id: string, newPrice: string) => {
        // setProducts(products.map(product =>
        //     product.id === id ? { ...product, price: newPrice } : product
        // ));
    };

    const handleUpdateStock = (id: string, newStock: string) => {
        // setProducts(products.map(product =>
        //     product.id === id ? { ...product, stock: newStock } : product
        // ));
    };

    const [selectedProduct, setSelectedProduct] = useState<[string, boolean][]>([]);

    const handleSelectedProduct = (id: string, isChecked: boolean) => {
        setSelectedProduct(prevSelected => {
            const existingProductIndex = prevSelected.findIndex(product => product[0] === id);

            if (isChecked) {
                if (existingProductIndex !== -1) {
                    // Update the existing product
                    const updatedSelected = [...prevSelected];
                    updatedSelected[existingProductIndex] = [id, isChecked];
                    return updatedSelected;
                } else {
                    // Add new product
                    return [...prevSelected, [id, isChecked]];
                }
            } else {
                // Remove the product if isChecked is false
                return prevSelected.filter(product => product[0] !== id);
            }
        });
    };

    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;

        if (isChecked) {
            // setSelectedProduct(products.map(product => [product.id, true]));
            setSelectAll(!selectAll);
        } else {
            setSelectedProduct([]);
            setSelectAll(false);
        }
    };

    return (
        <div className="min-h-screen p-4 bg-white rounded">
            {/* header */}
            <div className="flex justify-between items-center mb-4">
                <p className="text-2xl font-bold">Daftar Produk</p>
                <Link
                    to="/seller/add-product"
                    className="[&.active]:font-bold flex gap-2 items-center py-3"
                >
                    <Button className="gap-2 rounded-full bg-[#0086B4]">
                        <CiCirclePlus size={"1.5rem"} />
                        Tambah Produk
                    </Button>
                </Link>
            </div>

            {/* sort status */}
            <div className="flex space-x-4 mb-4 border-b">
                <button onClick={() => handleSortIsActive(null)} className={`pb-2 ${isActive === null ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}>Semua</button>
                <button onClick={() => handleSortIsActive(true)} className={`pb-2 ${isActive === true ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}>Aktif</button>
                <button onClick={() => handleSortIsActive(false)} className={`pb-2 ${isActive === false ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}>Nonaktif</button>
            </div>

            {/* sort comp */}
            <div className="flex gap-2 mb-4">
                {/* search sort */}
                <IconInput value={searchTerm} onChange={handleSearchChange} />

                {/* category sort */}
                <Dropdown options={categories} selectedOption={selectedCategory} onSelect={handleSortCategory} />

                {/* action sort */}
                <Dropdown options={action} selectedOption={selectedAction} onSelect={handleSortAction} />
            </div>

            {/* header and action */}
            <div className="flex items-center mb-2">
                <p className="flex flex-1 text-xl font-bold">{sortedAndFilteredProducts.length} Produk</p>

                <div className="flex items-center gap-2">
                    {selectedProduct.length !== 0 && (
                        <>
                            <BulkDeleteProductDialog selectedProduct={selectedProduct} />
                            <BulkNonactivateProductDialog selectedProduct={selectedProduct} />
                        </>
                    )}

                    <div className={sortedAndFilteredProducts.length === 0 ? 'hidden' : 'block'}>
                        {sortedAndFilteredProducts.length > 0 && (
                            <div className="flex items-center gap-2">
                                <p>Pilih Semua</p>
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    checked={selectAll}
                                    onChange={handleSelectAll}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* result */}
            {sortedAndFilteredProducts.length === 0 ? (
                // if result 0
                <div className="w-full flex justify-center items-center gap-4 border p-4 rounded shadow-md">
                    <LuPackageX size={'4rem'} color="#909090" />
                    <div>
                        <p className="text-xl font-bold">{isActive === true ? 'Oops, saat ini belum ada produk yang aktif' : isActive === null ? 'Oops, saat ini belum ada produk' : 'Semua produk telah aktif'}</p>
                        <p className="text-[#909090]">{isActive === true ? 'Aktifkan produk kamu atau buat produk baru' : 'Kamu bisa buat produk baru dan menyimpannya'}</p>
                    </div>
                </div>
            ) : (
                // if result !0
                <div className="flex flex-col gap-2">
                    {productBe.map((product) => (
                        <ProductItem key={product.id} product={product} onToggle={handleToggle} onUpdatePrice={handleUpdatePrice} onUpdateStock={handleUpdateStock} onChecked={handleSelectedProduct} selectedAll={selectAll} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Product;
