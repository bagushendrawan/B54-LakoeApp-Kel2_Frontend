/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable */
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { LuPackageX } from "react-icons/lu";
// import BulkDeleteProductDialog from "./components/bulkDeleteProductDialog";
// import BulkNonactivateProductDialog from "./components/bulkNonactivateProductDialog";
import { api } from "@/lib/api";
import useStore from "@/z-context";
import DropdownSort from "./components/dropDownSort";
import IconInput from "./components/iconInput";
import ProductItem from "./components/productItem";
import BulkDeleteProductDialog from "./components/bulkDeleteProductDialog";
import BulkNonactivateProductDialog from "./components/bulkNonactivateProductDialog";

const Product = () => {
  const user = useStore((state) => state.user);
  //   console.log("ini user store login", user);

  // categories & action
  const [categories, setCategories] = useState<ICategories[]>();
  const actions = [
    {
      id: "1",
      name: "Terakhir Diubah",
    },
    {
      id: "2",
      name: "Harga Tertinggi",
    },
    {
      id: "3",
      name: "Harga Terendah",
    },
    {
      id: "4",
      name: "Stok Paling Banyak",
    },
    {
      id: "5",
      name: "Stok Paling Sedikit",
    },
  ];

  // data product
  const [products, setProducts] = useState<IProduct[]>();

  console.log(products);

  // state sort by search, category, action
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [selectedAction, setSelectedAction] = useState("Terakhir Diubah");
  // state sort status
  const [isActive, setIsActive] = useState<number>(1);

  // state select product
  const [selectedProduct, setSelectedProduct] = useState<[string, boolean][]>(
    []
  );
  const [selectAll, setSelectAll] = useState(false);

  // function sort status
  const handleSortIsActive = (status: number) => {
    setIsActive(status);
  };

  // function search
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // function sort category
  const handleSortCategory = (category: string) => {
    setSelectedCategory(category);
  };

  // function sort action
  const handleSortAction = (action: string) => {
    setSelectedAction(action);
  };

  // function update status product
  const handleToggle = (id: string) => {
    // setProducts((prevProducts) =>
    //     prevProducts.map((product) =>
    //         product.id === id ? { ...product, active: !product.is_active } : product
    //     )
    // );
  };

  // const sortProducts = (products: any[]) => {
  //     switch (selectedAction) {
  //         case "Terakhir Diubah":
  //             return products; // Implement sorting logic here if you have the last modified date
  //         case "Terlaris":
  //             return products; // Implement sorting logic here if you have sales data
  //         case "Kurang Diminati":
  //             return products; // Implement sorting logic here if you have sales data
  //         case "Harga Tertinggi":
  //             return [...products].sort((a, b) => b.price - a.price);
  //         case "Harga Terendah":
  //             return [...products].sort((a, b) => a.price - b.price);
  //         case "Stok Terbanyak":
  //             return [...products].sort((a, b) => b.stock - a.stock);
  //         case "Stok Tersedikit":
  //             return [...products].sort((a, b) => a.stock - b.stock);
  //         default:
  //             return products;
  //     }
  // };

  // function update price
  const handleUpdatePrice = (id: string, newPrice: string) => {
    // setProducts(products.map(product =>
    //     product.id === id ? { ...product, price: newPrice } : product
    // ));
  };

  // function update stock
  const handleUpdateStock = (id: string, newStock: string) => {
    // setProducts(products.map(product =>
    //     product.id === id ? { ...product, stock: newStock } : product
    // ));
  };

  // function select product
  const handleSelectedProduct = (id: string, isChecked: boolean) => {
    setSelectedProduct((prevSelected) => {
      const existingProductIndex = prevSelected.findIndex(
        (product) => product[0] === id
      );

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
        return prevSelected.filter((product) => product[0] !== id);
      }
    });
  };

  // function select product all
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

  // fetch product
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);

        const res = await axios.get(`${api}/product/all/${user.id}`, {
          params: {
            searchTerm,
            isActive,
            category: selectedCategory,
            action: selectedAction,
          },
        });

        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [searchTerm, isActive, selectedCategory, selectedAction]);

  // fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${api}/product/all/${user.id}`, {
          params: {
            searchTerm,
            isActive,
            category: selectedCategory,
            action: selectedAction,
          },
        });

        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen px-6 py-4 bg-white shadow-sm shadow-black rounded">
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
        <button
          onClick={() => handleSortIsActive(1)}
          className={`pb-2 ${isActive === 1 ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
        >
          Semua
        </button>
        <button
          onClick={() => handleSortIsActive(2)}
          className={`pb-2 ${isActive === 2 ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
        >
          Aktif
        </button>
        <button
          onClick={() => handleSortIsActive(3)}
          className={`pb-2 ${isActive === 3 ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"}`}
        >
          Nonaktif
        </button>
      </div>

      {/* sort comp */}
      <div className="flex gap-2 mb-4">
        {/* search sort */}
        <IconInput value={searchTerm} onChange={handleSearchChange} />

        {/* category sort */}
        <DropdownSort
          options={categories}
          selectedOption={selectedCategory}
          onSelect={handleSortCategory}
        />

        {/* action sort */}
        <DropdownSort
          options={actions}
          selectedOption={selectedAction}
          onSelect={handleSortAction}
        />
      </div>

      {/* header and action */}
      <div className="flex items-center mb-2">
        <p className="flex flex-1 text-xl font-bold">
          {products?.length} Produk
        </p>

        <div className="flex items-center gap-2">
          {selectedProduct.length !== 0 && (
            <>
              <BulkDeleteProductDialog selectedProduct={selectedProduct} />
              <BulkNonactivateProductDialog selectedProduct={selectedProduct} />
            </>
          )}

          {/* result */}
          {products?.length === 0 ? (
            // if result 0
            <div className="w-full flex justify-center items-center gap-4 border p-4 rounded shadow-md">
              <LuPackageX size={"4rem"} color="#909090" />
              <div>
                <p className="text-xl font-bold">
                  {isActive === 2
                    ? "Oops, saat ini belum ada produk yang aktif"
                    : isActive === 1
                      ? "Oops, saat ini belum ada produk"
                      : "Semua produk telah aktif"}
                </p>
                <p className="text-[#909090]">
                  {isActive === 2
                    ? "Aktifkan produk kamu atau buat produk baru"
                    : "Kamu bisa buat produk baru dan menyimpannya"}
                </p>
              </div>
            </div>
          ) : (
            // if result !0
            <div className="flex flex-col gap-2">
              {products &&
                products.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    onToggle={handleToggle}
                    onUpdatePrice={handleUpdatePrice}
                    onUpdateStock={handleUpdateStock}
                    onChecked={handleSelectedProduct}
                    selectedAll={selectAll}
                  />
                ))}
            </div>
          )}
        </div>

        {/* result */}
        {products?.length === 0 ? (
          // if result 0
          <div className="w-full flex justify-center items-center gap-4 border p-4 rounded shadow-md">
            <LuPackageX size={"4rem"} color="#909090" />
            <div>
              <p className="text-xl font-bold">
                {isActive === 2
                  ? "Oops, saat ini belum ada produk yang aktif"
                  : isActive === 1
                    ? "Oops, saat ini belum ada produk"
                    : "Semua produk telah aktif"}
              </p>
              <p className="text-[#909090]">
                {isActive === 2
                  ? "Aktifkan produk kamu atau buat produk baru"
                  : "Kamu bisa buat produk baru dan menyimpannya"}
              </p>
            </div>
          </div>
        ) : (
          // if result !0
          <div className="flex flex-col gap-2">
            {products &&
              products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onToggle={handleToggle}
                  onUpdatePrice={handleUpdatePrice}
                  onUpdateStock={handleUpdateStock}
                  onChecked={handleSelectedProduct}
                  selectedAll={selectAll}
                />
              ))}
          </div>
        )}
      </div>
    </div>

    //     {/* result */}
    //     {products?.length === 0 ? (
    //       // if result 0
    //       <div className="w-full flex justify-center items-center gap-4 border p-4 rounded shadow-md">
    //         <LuPackageX size={"4rem"} color="#909090" />
    //         <div>
    //           <p className="text-xl font-bold">
    //             {isActive === 2
    //               ? "Oops, saat ini belum ada produk yang aktif"
    //               : isActive === 1
    //                 ? "Oops, saat ini belum ada produk"
    //                 : "Semua produk telah aktif"}
    //           </p>
    //           <p className="text-[#909090]">
    //             {isActive === 2
    //               ? "Aktifkan produk kamu atau buat produk baru"
    //               : "Kamu bisa buat produk baru dan menyimpannya"}
    //           </p>
    //         </div>
    //       </div>
    //     ) : (
    //       // if result !0
    //       <div className="flex flex-col gap-2">
    //         {products ? (
    //           products.map((product) => (
    //             <ProductItem
    //               key={product.id}
    //               product={product}
    //               onToggle={handleToggle}
    //               onUpdatePrice={handleUpdatePrice}
    //               onUpdateStock={handleUpdateStock}
    //               onChecked={handleSelectedProduct}
    //               selectedAll={selectAll}
    //             />
    //           ))
    //         ) : (
    //           <p>Belum ada produk</p>
    //         )}
    //       </div>
    //     )}
    //   </div>
    // );
  );
};

export default Product;
