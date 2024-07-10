import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/select";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { DeskripsiProduk, PilihKategori, ProductForm, URLHalamanCheckoutForm } from "./validators/form-produk-baru";

import { ChangeEvent, useState } from "react";
import { BsCircleFill, BsImage, BsPlusCircle, BsTrash } from "react-icons/bs";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../components/form"
import { useForm } from "react-hook-form";
import { Switch } from "@/components/switch";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/textarea";

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

    const FormSchema = z.object({
        produk_nama: z.string(),
        url_checkout: z.string(),
        kategori: z.string(),
        produk_deskripsi: z.string(),
        produk_foto:z.any(),

      })
    
      const formSubmit = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          produk_nama: "",
        },
      })
     

    const [isVariant, setVariant] = useState<Boolean>(false);
    const [preview, setPreview] = useState<string[]>([]);
    const [previewOptions, setPreviewOptions] = useState<string[]>([]);
    const [variant, setVariantValue] = useState<string[]>([]);
    const [variantOptions, setVariantOptions] = useState<string[][]>([]);
    const [currentVariant, setCurrentVariant] = useState<string>("");
    let displayArray : string[] = [];

    const formUse = useForm({
        defaultValues: {
          options: "",
        },
      })

    function onSubmit(data: any) {
        console.log(data);
        variantOptionHandle(0, data["options"])
    }

    function onSubmitForm(data: z.infer<typeof FormSchema>) {
        console.log("HITTT");
        console.log(data);
      }

    function imageHandle(index : number, url : string)
    {
    const newUrl = [...preview]
    newUrl[index] = url
    setPreview(newUrl);
    console.log(newUrl);
    }

    function imageOptionHandle(index : number, url : string)
    {
    const newUrl = [...previewOptions]
    newUrl[index] = url
    setPreviewOptions(newUrl);
    console.log(newUrl);
    }

    function variantOptionHandle(x : number, option : string)
    {
    if(!variantOptions[x])
    variantOptions[x] = [];
    const vary : string[][] = [...variantOptions]
    vary[x].push(option)
    setVariantOptions(vary);
    console.log(variantOptions);
    }
    
    function deleteVariantOptionHandle(x : number, y :number)
    {
        const vary = [...variantOptions]
        vary[x].splice(y, 1);
        setVariantOptions(vary)

    console.log(variantOptions);
    }

    function variantHandle(index : number, vary : string)
    {
    const variants = [...variant]
    variants[index] = vary
    setVariantValue(variants);
    console.log(variants);
    }
    
    return (
        <>
        <Form {...formSubmit}>
        <form onSubmit={formSubmit.handleSubmit(onSubmitForm)} className="w-full space-y-6">
        <div className="flex flex-col ms-3 bg-slate-200 w-7/12 p-3">
            <div id="informasi-produk" className=" bg-slate-50 p-4">
            <h1 className="font-bold text-xl mb-4">Informasi Produk</h1>
            <FormField
              control={formSubmit.control}
              name="produk_nama"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-normal mt-2">Nama Produk</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukan nama produk" {...field} required/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formSubmit.control}
              name="url_checkout"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-normal">URL Halaman Checkout</FormLabel>
                  <FormControl>
                    <div className="flex justify-center items-center">
                    <p className="bg-slate-100 p-3 rounded-s-lg border-2 text-xs">lakoe.store/</p>
                    <Input placeholder="nama-produk" {...field} className="rounded-s-none rounded-e-xl" required/>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="font-normal mt-4">Kategori</p>
            <PilihKategori formSubmit/>
            </div>

            <div id="detail-produk" className="mt-4 bg-slate-50 p-4">
                <h1 className="font-bold text-xl mb-4">Detail Produk</h1>
                <p className="mb-2">Deskripsi</p>
                <Textarea {...formSubmit} name="produk_deskripsi" className="h-32" required/>
                <p className="mt-4 mb-2">Foto Produk</p>
                <div className="flex gap-2">     

                <label htmlFor="foto-produk1" className="relative text-gray-400 focus-within:text-gray-600 block">
                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                <Input type="file" name="foto-produk1" className="w-32 h-32 text-transparent" onChange={(event) => {
                        const { files, displayUrl} = getImageData(event);
                        imageHandle(0, displayUrl)
                      }}></Input>
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
                      }}></Input>
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
                      }}></Input>
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
                      }}></Input>
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
                      }}></Input>
                    {preview[4] && 
                    <div>
                    <img src={preview[4]} className="absolute inset-0 w-32 h-32 object-cover"/>
                    <BsTrash className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2" onClick={() => {}}/>
                    </div>}
                </label>
            </div>
            </div>

            <div id="varian-produk" className="mt-4 bg-slate-50 p-4">
                {isVariant ? 
                <div className="w-full flex flex-col">
                <div className="flex justify-between">
                <div>
                <h1 className="font-bold text-xl mb-2">Varian Produk</h1>
                <p className="text-gray-400 text-sm mb-2">Tambah varian agar pembeli dapat memilih produk yang sesuai, yuk!</p>
                </div>
                <Button variant={"outline"} className="rounded-2xl self-end" onClick={()=> {setVariant(false); setVariantValue([])}}>
                    <BsTrash className="me-2"/>Hapus Varian</Button>
                </div>
                    <div className="flex gap-2">
                        <Button variant={"outline"} className="rounded-2xl" onClick={(e) => { e.preventDefault();
                            variantHandle(0, "Warna"); setCurrentVariant("0");
                        }}>Warna</Button>
                        <Button variant={"outline"} className="rounded-2xl" onClick={() => {
                            variantHandle(1, "Ukuran"); setCurrentVariant("1");
                        }}>Ukuran</Button>
                        <Button variant={"outline"} className="rounded-2xl" onClick={() => {
                            variantHandle(2, "Ukuran Kemasan"); setCurrentVariant("2");
                        }}>Ukuran Kemasan</Button>
                        <Button variant={"outline"} className="rounded-2xl"><BsPlusCircle className="me-2"/>Tambah Varian</Button>
                    </div>
                </div>
                    :  
                <div className="flex justify-between">
                <div>
                <h1 className="font-bold text-xl mb-2">Varian Produk</h1>
                <p className="text-gray-400 text-sm mb-2">Tambah varian agar pembeli dapat memilih produk yang sesuai, yuk!</p>
                </div>
                <Button variant={"outline"} className="rounded-2xl self-end" onClick={()=> {setVariant(true);}}><BsPlusCircle className="me-2"/>Tambah Varian</Button>
                </div>
                }

                <div className="mt-2">
                {
                    variant.map((item,i)=>(
                        <div className="w-full flex flex-col" key={i}>
                        <p className="my-2">{item}</p>
                        <Form {...formUse}>
                        <form className="w-2/3 space-y-6 flex gap-4 items-center">
                        <FormField
                        name={"warna"+i}
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <div className="flex items-center gap-4">
                                <Input placeholder="Warna" {...field} />
                                <Button className="" onClick={formUse.handleSubmit(onSubmit)}>Tambahkan</Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        </form>
                        </Form>
                          <div className="flex gap-4 mt-4">
                            { variantOptions[i] &&
                                variantOptions[i].map((item, x)=>(
                                    <div>
                                    <Button key={x} onClick={() => {deleteVariantOptionHandle(i,x)}} className="bg-red-500"><BsTrash className="me-2"/>{item}</Button>
                                    </div>
                                ))
                            }
                          </div>
                        </div>
                    ))
                }
                {
                    variantOptions[0] && <div><p className="my-4">Tampilkan Gambar Varian</p><Switch/></div>
                }
                <div className="flex gap-4 mt-4">
                {
                    variantOptions[parseInt(currentVariant)] && variantOptions[parseInt(currentVariant)].map((item, x)=>(
                        <div>
                        <label htmlFor={"varian-option" + x} className="relative text-gray-400 focus-within:text-gray-600 block">
                        <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                        <Input type="file" name={"varian-option" + x} className="w-32 h-32 text-transparent" onChange={(event) => {
                                const { files, displayUrl} = getImageData(event)
                                imageOptionHandle(x, displayUrl)
                            }}></Input>
                            {previewOptions[x] && 
                            <div>
                            <img src={previewOptions[x]} className="absolute inset-0 w-32 h-32 object-cover"/>
                            <BsTrash className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2" onClick={() => {imageOptionHandle(x, "")}}/>
                            </div>}
                        </label>
                        </div>
                    ))
                }
                </div>
                {
                    variantOptions[0] && <div className="flex justify-between mt-8">
                    <div className="flex flex-col">
                    <h1 className="font-bold">Atur Sekaligus</h1>
                    <p className="text-gray-500">Kamu dapat mengatur harga, stok dan SKU sekaligus</p>
                    </div>
                    <Button variant={"outline"} className="rounded-2xl bg-blue-500 text-white"><BsPlusCircle className="me-2"/>Atur Sekaligus</Button>
                </div>
                }
                

                {
                     variantOptions[0] && variantOptions[0].map((item, x)=>(
                        <>
                        <div className="flex items-center my-6">
                            <p>{item}</p>
                            <Switch/>
                            <p>Aktif</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center mt-2 w-1/2">
                                <p className="bg-slate-100 py-2 px-4 rounded-s-lg border-2 text-sm">Rp.</p>
                                <Input placeholder="Harga" className="rounded-s-none rounded-e-xl" required/>
                                </div>
                                <div className="flex justify-center items-center mt-2 w-1/2">
                                <Input placeholder="Stok Produk" className="rounded-xl" required/>
                                </div>
                             </div>
                             <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center mt-2 w-1/2">
                                <Input placeholder="Stok Keeping Unit" className="rounded-xl" required/>
                                </div>
                                <div className="flex justify-center items-center mt-2 w-1/2">
                                <Input placeholder="Berat Produk" className="rounded-e-none rounded-s-xl" required/>
                                <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">Kg</p>
                                </div>
                             </div>
                        </div>
                        
                        <p className="mt-4">Ukuran Produk</p>
                        <div className="flex gap-4">
                        <div className="flex justify-center items-center mt-2">
                        <Input placeholder="Panjang" className="rounded-e-none rounded-s-xl" required/>
                        <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">cm</p>
                        </div>

                        <div className="flex justify-center items-center mt-2">
                        <Input placeholder="lebar" className="rounded-e-none rounded-s-xl" required/>
                        <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">cm</p>
                        </div>

                        <div className="flex justify-center items-center mt-2">
                        <Input placeholder="tinggi" className="rounded-e-none rounded-s-xl" required/>
                        <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">cm</p>
                        </div>
                        </div>
                        </>
                     ))
                }

                </div>
            </div>
            
            {/* <div id="harga" className="mt-4 bg-slate-50 p-4">
                <h1 className="font-bold text-xl mb-4">Harga</h1>
                <p>Harga</p>
                <div className="flex justify-center items-center mt-2">
                        <FormField
                        name={"harga"}
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <div className="flex items-center">
                                <Input placeholder="Berat Produk" className="rounded-e-none rounded-s-xl" required/>
                                <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">Kg</p>
                                </div>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <p className="bg-slate-100 py-2 px-4 rounded-s-lg border-2 text-sm">Rp.</p>
                    <Input placeholder="Harga" className="rounded-s-none rounded-e-xl" required/>
                </div>

                <p className="mt-4">Minimal Pembelian</p>
                <div className="flex justify-center items-center mt-2">
                    <Input placeholder="Produk" className="rounded-e-none rounded-s-xl" required/>
                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">Produk</p>
                </div>
            </div> */}

            {/* <div id="pengelolaan-produk" className="mt-4 bg-slate-50 p-4">
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
            </div> */}

            {/* <div id="harga" className="mt-4 bg-slate-50 p-4">
                <h1 className="font-bold text-xl mb-4">Pengelolaan Produk</h1>

                <p>Berat Produk</p>
                 <FormField
                    name={"harga" + x}
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <div className="flex items-center">
                            <Input placeholder="Berat Produk" className="rounded-e-none rounded-s-xl" required/>
                            <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">Kg</p>
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    /> */}

                {/* <p>Ukuran Produk</p>
                <div className="flex gap-4">
                <div className="flex justify-center items-center mt-2">
                <FormField
                    name={"harga" + x}
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <div className="flex items-center">
                            <Input placeholder="Berat Produk" className="rounded-e-none rounded-s-xl" required/>
                            <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">Kg</p>
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Input placeholder="Harga" className="rounded-e-none rounded-s-xl" required/>
                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">cm</p>
                </div>
                <div className="flex justify-center items-center mt-2">
                <FormField
                    name={"harga" + x}
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <div className="flex items-center">
                            <Input placeholder="Berat Produk" className="rounded-e-none rounded-s-xl" required/>
                            <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">Kg</p>
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Input placeholder="Harga" className="rounded-e-none rounded-s-xl" required/>
                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">cm</p>
                </div>
                <div className="flex justify-center items-center mt-2">
                <FormField
                    name={"harga" + x}
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <div className="flex items-center">
                            <Input placeholder="Berat Produk" className="rounded-e-none rounded-s-xl" required/>
                            <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">Kg</p>
                            </div>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Input placeholder="Harga" className="rounded-e-none rounded-s-xl" required/>
                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">cm</p>
                </div>
                </div>
            </div> */}

                
            <div className="flex justify-between gap-4 mt-4 bg-slate-50 p-4 w-full">

                <Button variant={"outline"} className="rounded-3xl self-start">Preview Halaman Checkout</Button>
                <div>
                <Button variant={"outline"} className="rounded-3xl">Batal</Button>

                </div>
            </div>
            </div>
            <Button variant={"outline"} type="submit" className="bg-blue-600 text-white rounded-3xl">Simpan</Button>
            </form>
            </Form>
        </>
    )
}