import { Button } from "../components/button";
import { DeskripsiProduk, PilihKategori, ProductForm, URLHalamanCheckoutForm } from "./validators/form-produk-baru";
import { Input } from "../components/input";
import { BsImage, BsPlusCircle } from "react-icons/bs";
import { useState } from "react";

export function FormProdukBaru() {
    const [isVariant, setVariant] = useState<Boolean>(false);
    return (
        <>
        <div className="flex flex-col ms-3 bg-slate-200 w-7/12 p-3">
            <div id="informasi-produk" className=" bg-slate-50 p-4">
            <h1 className="font-bold text-xl mb-4">Informasi Produk</h1>
            <ProductForm/>
            <URLHalamanCheckoutForm/>
            <p className="font-normal mt-4">Kategori</p>
            <PilihKategori/>
            </div>

            <div id="detail-produk" className="mt-4 bg-slate-50 p-4">
                <h1 className="font-bold text-xl mb-4">Detail Produk</h1>
                <p className="mb-2">Deskripsi</p>
                <DeskripsiProduk/>
                <p className="mt-4 mb-2">Foto Produk</p>
                <div className="flex gap-2">
                    
                <label htmlFor="foto-produk" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk" className="w-32 h-32 text-transparent" required></Input>
                </label>

                <label htmlFor="foto-produk" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk" className="w-32 h-32 text-transparent" required></Input>
                </label>

                <label htmlFor="foto-produk" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12"/>
                <Input type="file" name="foto-produk" className="w-32 h-32 text-transparent" required></Input>
                </label>

                <label htmlFor="foto-produk" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk" className="w-32 h-32 text-transparent" required></Input>
                </label>

                <label htmlFor="foto-produk" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk" className="w-32 h-32 text-transparent" required></Input>
                </label>
            </div>
            </div>

            <div id="varian-produk" className="mt-4 bg-slate-50 p-4">
                <h1 className="font-bold text-xl mb-2">Varian Produk</h1>
                <p className="text-gray-400 text-sm mb-2">Tambah varian agar pembeli dapat memilih produk yang sesuai, yuk!</p>
                {isVariant ?  
                <div className="w-full flex flex-col">
                <Button variant={"outline"} className="rounded-2xl self-end" onClick={()=> {setVariant(false);}}><BsPlusCircle className="me-2"/>Hapus Varian</Button>
                <div className="">
                <Button variant={"outline"} className="rounded-2xl">Warna</Button>
                <Button variant={"outline"} className="rounded-2xl">Ukuran</Button>
                <Button variant={"outline"} className="rounded-2xl">Ukuran Kemasan</Button>
                <Button variant={"outline"} className="rounded-2xl"><BsPlusCircle className="me-2"/>Tambah Varian</Button>
                </div>
                </div>
                    :  
                <div className="w-full flex flex-row-reverse">
                    <Button variant={"outline"} className="rounded-2xl" onClick={()=> {setVariant(true)}}><BsPlusCircle className="me-2"/>Tambah Varian</Button>
                </div>
                }
            </div>
            
            <div id="harga" className="mt-4 bg-slate-50 p-4">
                <h1 className="font-bold text-xl mb-4">Harga</h1>
                <p>Harga</p>
                <Input></Input>

                <p className="mt-4">Minimal Pembelian</p>
                <Input></Input>
            </div>

            <div id="pengelolaan-produk" className="mt-4 bg-slate-50 p-4">
                <h1 className="font-bold text-xl mb-4">Pengelolaan Produk</h1>
                <div className="flex gap-4">
                    <div>
                    <p>Stok Produk</p>
                    <Input></Input>
                    </div>
                    <div>
                    <p>SKU(Stok Keeping Unit)</p>
                    <Input></Input>
                    </div>
                </div>
            </div>

            <div id="harga" className="mt-4 bg-slate-50 p-4">
                <h1 className="font-bold text-xl mb-4">Pengelolaan Produk</h1>

                <p>Berat Produk</p>
                <Input></Input>

                <p>Ukuran Produk</p>
                <div className="flex gap-4">
                <Input></Input>
                <Input></Input>
                <Input></Input>
                </div>
                </div>

                
            <div className="flex justify-between gap-4 mt-4 bg-slate-50 p-4 w-full">

                <Button variant={"outline"} className="rounded-3xl self-start">Preview Halaman Checkout</Button>
                <div>
                <Button variant={"outline"} className="rounded-3xl">Batal</Button>
                <Button variant={"outline"} className="bg-blue-600 text-white rounded-3xl">Simpan</Button>
                </div>
            </div>
            </div>
        </>
    )
}