import { Button } from "@/components/button";
import { DeskripsiProduk, PilihKategori, ProductForm, URLHalamanCheckoutForm } from "./validators/form-produk-baru";
import { Input } from "@/components/input";

export function FormProdukBaru() {
    return (
        <>
        <div className="flex flex-col ms-3 bg-slate-200 w-1/2 p-3">
            <div id="informasi-produk" className=" bg-slate-50 p-4">
            <h1>Informasi Produk</h1>
            <ProductForm/>
            <URLHalamanCheckoutForm/>
            <PilihKategori/>
            </div>

            <div id="detail-produk" className="mt-4 bg-slate-50 p-4">
            <h1>Detail Produk</h1>
            <p>Deskripsi</p>
            <DeskripsiProduk/>
            <p>Foto Produk</p>
            <div className="flex gap-2">
                <Input type="file" className="w-1/5 h-32"></Input>
                <Input type="file" className="w-1/5 h-32"></Input>
                <Input type="file" className="w-1/5 h-32"></Input>
                <Input type="file" className="w-1/5 h-32"></Input>
                <Input type="file" className="w-1/5 h-32"></Input>
            </div>
            </div>

            <div id="arian-produk" className="mt-4 bg-slate-50 p-4">
                <h1>Varian Produk</h1>
                <div className="w-full flex flex-row-reverse">
                <Button>Tambah Varian</Button>
                </div>
            </div>
            
            <div id="harga" className="mt-4 bg-slate-50 p-4">
                <h1>Harga</h1>
                <p>Harga</p>
                <Input></Input>

                <p>Minimal Pembelian</p>
                <Input></Input>
            </div>

            <div id="pengelolaan-produk" className="mt-4 bg-slate-50 p-4">
                <h1>Pengelolaan Produk</h1>
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
                <h1>Berat & Pengiriman</h1>

                <p>Berat Produk</p>
                <Input></Input>

                <p>Ukuran Produk</p>
                <div className="flex gap-4">
                <Input></Input>
                <Input></Input>
                <Input></Input>
                </div>
                </div>

                
            <div className="flex flex-row-reverse gap-4">
                <Button>Batal</Button>
                <Button>Simpan</Button>
            </div>
            </div>
        </>
    )
}