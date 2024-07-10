import MapComponent from '@/components/location';
import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaEllipsisH } from 'react-icons/fa';

const IconInput = ({ icon: Icon, placeholder, value, onChange }) => {
    return (
        <div className="relative flex items-center w-full">
            <span className="absolute left-3 text-gray-500">
                <Icon />
            </span>
            <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

const Dropdown = ({ label, options, selectedOption, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-full">
            <div className="flex items-center border rounded px-3 py-2 cursor-pointer" onClick={toggleDropdown}>
                <span>{selectedOption}</span>
                <FaChevronDown className="ml-auto text-gray-500" />
            </div>
            {isOpen && (
                <div className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer ${selectedOption === option ? 'bg-blue-50' : ''
                                }`}
                            onClick={() => handleOptionClick(option)}
                        >
                            <span className="flex-1">{option}</span>
                            {selectedOption === option && <span className="text-blue-500 ml-2">•</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const ProductItem = ({ product, onToggle }) => {
    return (
        <div className="flex items-center justify-between border-b py-4">
            <div className="flex items-center">
                <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
                <div>
                    <div className="font-bold">{product.name}</div>
                    <div className="text-gray-500">{product.price}</div>
                    <div className="text-gray-500">{product.stock}</div>
                    <div className="text-gray-500">{product.sku}</div>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border rounded">Ubah Harga</button>
                <button className="px-3 py-1 border rounded">Ubah Stok</button>
                <button className="px-3 py-1 border rounded">Lihat Halaman</button>
                <button className="px-3 py-1 border rounded">
                    <FaEllipsisH />
                </button>
                <label className="switch">
                    <input type="checkbox" checked={product.active} onChange={() => onToggle(product.id)} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
};

const App = () => {
    const categories = ['Semua Kategori', 'Audio, Kamera & Elektronik', 'Buku', 'Dapur', 'Fashion Anak & Bayi', 'Fashion Muslim', 'Fashion Pria', 'Fashion Wanita'];
    const sortingOptions = ['Terakhir Diubah', 'Terlaris', 'Kurang Diminati', 'Harga Tertinggi', 'Harga Terendah', 'Stok Terbanyak', 'Stok Tersedikit'];
    const [products, setProducts] = useState([
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            name: 'KAOS BASIC COTTON KENARI',
            price: 'Rp55.000',
            stock: 'Stok: 20',
            sku: 'SKU: 0219AKD192',
            active: true,
        },
        // Add more product objects here
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
    const [selectedSort, setSelectedSort] = useState('Terlaris');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleToggle = (id) => {
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
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Tambah Produk</button>
            </div>
            <div className="flex space-x-4 mb-4">
                <button className="text-blue-500 border-b-2 border-blue-500 pb-2">Semua</button>
                <button className="text-gray-500">Aktif</button>
                <button className="text-gray-500">Nonaktif</button>
            </div>
            <div className="flex space-x-4 mb-4">
                <IconInput icon={FaSearch} placeholder="Cari produk" value={searchTerm} onChange={handleSearchChange} />
                <Dropdown label="Semua Kategori" options={categories} selectedOption={selectedCategory} onSelect={setSelectedCategory} />
                <Dropdown label="Urutkan" options={sortingOptions} selectedOption={selectedSort} onSelect={setSelectedSort} />
            </div>
            <div className="flex flex-col space-y-4">
                {filteredProducts.map((product) => (
                    <ProductItem key={product.id} product={product} onToggle={handleToggle} />
                ))}
            </div>

            <MapComponent />
        </div>
    );
};

export default App;
