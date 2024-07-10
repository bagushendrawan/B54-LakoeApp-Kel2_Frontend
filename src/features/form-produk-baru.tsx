import { Button } from "../components/button";
import { Input } from "../components/input";
import { DeskripsiProduk, PilihKategori, ProductForm, URLHalamanCheckoutForm } from "./validators/form-produk-baru";

import { ChangeEvent, useState } from "react";
import { BsImage, BsPlusCircle, BsTrash } from "react-icons/bs";

function getImageData(event: ChangeEvent<HTMLInputElement>) {
    const dataTransfer = new DataTransfer();
  
    Array.from(event.target.files!).forEach((image) =>
      dataTransfer.items.add(image)
    );
  
    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);
  
    return { files, displayUrl };
  }


export function FormProdukBaru() {
    const [isVariant, setVariant] = useState<Boolean>(false);
    const [preview, setPreview] = useState<string[]>([]);
    let displayArray : string[] = [];

    function imageHandle(index : number, url : string)
    {
    const newUrl = [...preview]
    newUrl[index] = url
    setPreview(newUrl);
    console.log(newUrl);
    }
    
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

                <label htmlFor="foto-produk1" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk1" className="w-32 h-32 text-transparent" onChange={(event) => {
                        const { files, displayUrl} = getImageData(event);
                        imageHandle(0, displayUrl)
                      }} required></Input>
                    {preview[0] && 
                    <div>
                    <img src={preview[0]} className="absolute inset-0 w-32 h-32 object-cover"/>
                    <BsTrash className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2" onClick={() => {imageHandle(0, "")}}/>
                    </div>}
                </label>

                <label htmlFor="foto-produk2" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk2" className="w-32 h-32 text-transparent" onChange={(event) => {
                        const { files, displayUrl} = getImageData(event)
                        imageHandle(1, displayUrl)
                      }} required></Input>
                    {preview[1] && 
                    <div>
                    <img src={preview[1]} className="absolute inset-0 w-32 h-32 object-cover"/>
                    <BsTrash className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2" onClick={() => {imageHandle(1, "")}}/>
                    </div>}
                </label>

                <label htmlFor="foto-produk3" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk3" className="w-32 h-32 text-transparent" onChange={(event) => {
                        const { files, displayUrl} = getImageData(event)
                        imageHandle(2, displayUrl)
                      }} required></Input>
                    {preview[2] && 
                    <div>
                    <img src={preview[2]} className="absolute inset-0 w-32 h-32 object-cover"/>
                    <BsTrash className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2" onClick={() => {imageHandle(3, "")}}/>
                    </div>}
                </label>

                <label htmlFor="foto-produk4" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk4" className="w-32 h-32 text-transparent" onChange={(event) => {
                        const { files, displayUrl} = getImageData(event)
                        imageHandle(3, displayUrl)
                      }} required></Input>
                    {preview[3] && 
                    <div>
                    <img src={preview[3]} className="absolute inset-0 w-32 h-32 object-cover"/>
                    <BsTrash className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2" onClick={() => {imageHandle(4, "")}}/>
                    </div>}
                </label>

                <label htmlFor="foto-produk5" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk5" className="w-32 h-32 text-transparent" onChange={(event) => {
                        const { files, displayUrl} = getImageData(event)
                        imageHandle(4, displayUrl)
                      }} required></Input>
                    {preview[4] && 
                    <div>
                    <img src={preview[4]} className="absolute inset-0 w-32 h-32 object-cover"/>
                    <BsTrash className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2" onClick={() => {}}/>
                    </div>}
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
                <div className="flex justify-center items-center mt-2">
                    <p className="bg-slate-100 py-2 px-4 rounded-s-lg border-2 text-sm">Rp.</p>
                    <Input placeholder="Harga" className="rounded-s-none rounded-e-xl" required/>
                </div>

                <p className="mt-4">Minimal Pembelian</p>
                <div className="flex justify-center items-center mt-2">
                    <Input placeholder="Produk" className="rounded-e-none rounded-s-xl" required/>
                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">Produk</p>
                </div>
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
                <div className="flex justify-center items-center mt-2">
                    <Input placeholder="Harga" className="rounded-e-none rounded-s-xl" required/>
                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">cm</p>
                </div>
                <div className="flex justify-center items-center mt-2">
                    <Input placeholder="Harga" className="rounded-e-none rounded-s-xl" required/>
                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">cm</p>
                </div>
                <div className="flex justify-center items-center mt-2">
                    <Input placeholder="Harga" className="rounded-e-none rounded-s-xl" required/>
                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">cm</p>
                </div>
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