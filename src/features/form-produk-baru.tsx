/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/select";
import { Button } from "../components/button";
import { Input } from "../components/input";
import {
    DeskripsiProduk,
    PilihKategori,
    ProductForm,
    URLHalamanCheckoutForm,
} from "./validators/form-produk-baru";
import { ChangeEvent, useEffect, useState } from "react";
import { BsCircleFill, BsImage, BsPlusCircle, BsTrash } from "react-icons/bs";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { Switch } from "@/components/switch";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/textarea";
import { useProdukForm } from "./hooks/form-produk";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/dropdown-menu";

function getImageData(event: ChangeEvent<HTMLInputElement>) {
    const dataTransfer = new DataTransfer();

    Array.from(event.target.files!).forEach((image) =>
        dataTransfer.items.add(image)
    );

    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);

    return { files, displayUrl };
}

export const menuItemsData = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Services',
        url: '/services',
    },
    {
        title: 'About',
        url: '/about',
    },
];

export function FormProdukBaru() {
    const { handleSubmit, onSubmitForm, register, errors, control, unregister } =
        useProdukForm();

    const [isVariant, setVariant] = useState<boolean>(false);
    const [preview, setPreview] = useState<string[]>([]);
    const [previewOptions, setPreviewOptions] = useState<string[]>([]);
    const [variant, setVariantValue] = useState<string[]>([]);
    const [variantOptions, setVariantOptions] = useState<string[][]>([]);
    const [currentVariant, setCurrentVariant] = useState<string>("");
    const [isVariantOption, setIsVariantOption] = useState<boolean[]>([]);
    const [isVariantGambar, setIsVariantGambar] = useState<boolean[]>([]);
    const [kategori, setKategori] = useState<string[]>([]);

    const formUse = useForm({
        defaultValues: {
            options: "",
        },
    });

    function onSubmit(data: any) {
        console.log("data", data);
        variantOptionHandle(0, data["options"]);
    }

    function imageHandle(index: number, url: string) {
        const newUrl = [...preview];
        newUrl[index] = url;
        setPreview(newUrl);
        console.log(newUrl);
    }

    function imageOptionHandle(index: number, url: string) {
        const newUrl = [...previewOptions];
        newUrl[index] = url;
        setPreviewOptions(newUrl);
        console.log(newUrl);
    }

    function variantOptionHandle(x: number, option: string) {
        if (!variantOptions[x]) variantOptions[x] = [];
        const vary: string[][] = [...variantOptions];
        vary[x].push(option);
        setVariantOptions(vary);
        console.log(variantOptions);
    }

    function deleteVariantOptionHandle(x: number, y: number) {
        const vary = [...variantOptions];
        vary[x].splice(y, 1);
        setVariantOptions(vary);

        console.log(variantOptions);
    }

    function variantHandle(index: number, vary: string) {
        const variants = [...variant];
        variants[index] = vary;
        setVariantValue(variants);
        console.log(variants);
    }

    function handleVariantSwitch(index: number, bool: boolean) {
        if (!isVariantOption[index])
            isVariantOption[index] = false;
        const variants = [...isVariantOption];
        variants[index] = bool;
        setIsVariantOption(variants);
        console.log(variants);
    }

    function handleVariantGambarSwitch(index: number, bool: boolean) {
        if (!isVariantGambar[index])
            isVariantGambar[index] = false;
        const variants = [...isVariantGambar];
        variants[index] = bool;
        setIsVariantGambar(variants);
        console.log(variants);
    }

    function kategoriHandle(index: number, kategoriAdd: string) {
        console.log("HITSZ");
        const kateg = [...kategori];
        kateg[index] = kategoriAdd;
        setKategori(kateg);
        console.log(kategoriAdd);
    }

    useEffect(() => {
        console.log("variantopt", variantOptions);
    }, [variantOptions]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)} className="w-full space-y-6">
                <div className="flex flex-col ms-3 bg-slate-200 w-7/12 p-3">
                    <div id="informasi-produk" className=" bg-slate-50 p-4">
                        <h1 className="font-bold text-xl mb-4">Informasi Produk</h1>
                        <h1 className=" text-md mb-2 mt-4">Nama Produk</h1>
                        <Input
                            placeholder="Masukan nama produk"
                            {...register("produk_nama")}
                        />

                        <h1 className=" text-md mb-2 mt-4">URL Halaman Checkout</h1>
                        <div className="flex justify-center items-center">
                            <p className="bg-slate-100 p-3 rounded-s-lg border-2 text-xs">
                                lakoe.store/
                            </p>
                            <Input
                                placeholder="nama-produk"
                                className="rounded-s-none rounded-e-xl"
                                {...register("produk_url_checkout")}

                            />
                        </div>
                        <div className="flex gap-2">
                            <p className="font-normal mt-4">Kategori</p>
                            <p className="font-normal mt-4">{kategori[0] && kategori[0]} {kategori[1] && kategori[1]} {kategori[2] && kategori[2]}</p>
                        </div>

                        <Select onValueChange={(e) => { unregister("produk_kategori"); register("produk_kategori", { value: e }); }}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div id="detail-produk" className="mt-4 bg-slate-50 p-4">
                        <h1 className="font-bold text-xl mb-4">Detail Produk</h1>
                        <p className="mb-2">Deskripsi</p>
                        <Textarea
                            {...register("produk_deskripsi")}
                            className="h-32"
                        />
                        <p className="mt-4 mb-2">Foto Produk</p>
                        <div id="produk-foto" className="flex gap-2">
                            <label
                                htmlFor="produk_foto"
                                className="relative text-gray-400 focus-within:text-gray-600 block"
                            >
                                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                                <Input
                                    type="file"
                                    {...register("produk_foto")}
                                    className="w-32 h-32 text-transparent"
                                    onChange={(event) => {
                                        const { files, displayUrl } = getImageData(event);
                                        imageHandle(0, displayUrl);
                                    }}
                                ></Input>
                                {preview[0] && (
                                    <div>
                                        <img
                                            src={preview[0]}
                                            className="absolute inset-0 w-32 h-32 object-cover"
                                        />
                                        <BsTrash
                                            className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2"
                                            onClick={() => {
                                                { unregister("produk_foto"); }
                                                imageHandle(0, "");
                                            }}
                                        />
                                    </div>
                                )}
                            </label>

                            <label
                                htmlFor="produk_foto_1"
                                className="relative text-gray-400 focus-within:text-gray-600 block"
                            >
                                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                                <Input
                                    type="file"
                                    {...register("produk_foto_1")}
                                    className="w-32 h-32 text-transparent"
                                    onChange={(event) => {
                                        const { files, displayUrl } = getImageData(event);
                                        imageHandle(1, displayUrl);
                                    }}
                                ></Input>
                                {preview[1] && (
                                    <div>
                                        <img
                                            src={preview[1]}
                                            className="absolute inset-0 w-32 h-32 object-cover"
                                        />
                                        <BsTrash
                                            className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2"
                                            onClick={() => {
                                                { unregister("produk_foto_1"); }
                                                imageHandle(1, "");
                                            }}
                                        />
                                    </div>
                                )}
                            </label>

                            <label
                                htmlFor="produk_foto_2"
                                className="relative text-gray-400 focus-within:text-gray-600 block"
                            >
                                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                                <Input
                                    type="file"
                                    {...register("produk_foto_2")}
                                    className="w-32 h-32 text-transparent"
                                    onChange={(event) => {
                                        const { files, displayUrl } = getImageData(event);
                                        imageHandle(2, displayUrl);
                                    }}
                                ></Input>
                                {preview[2] && (
                                    <div>
                                        <img
                                            src={preview[2]}
                                            className="absolute inset-0 w-32 h-32 object-cover"
                                        />
                                        <BsTrash
                                            className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2"
                                            onClick={() => {
                                                { unregister("produk_foto_2"); }
                                                imageHandle(3, "");
                                            }}
                                        />
                                    </div>
                                )}
                            </label>

                            <label
                                htmlFor="produk_foto_3"
                                className="relative text-gray-400 focus-within:text-gray-600 block"
                            >
                                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                                <Input
                                    type="file"
                                    {...register("produk_foto_3")}
                                    className="w-32 h-32 text-transparent"
                                    onChange={(event) => {
                                        const { files, displayUrl } = getImageData(event);
                                        imageHandle(3, displayUrl);
                                    }}
                                ></Input>
                                {preview[3] && (
                                    <div>
                                        <img
                                            src={preview[3]}
                                            className="absolute inset-0 w-32 h-32 object-cover"
                                        />
                                        <BsTrash
                                            className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2"
                                            onClick={() => {
                                                { unregister("produk_foto_3"); }
                                                imageHandle(4, "");
                                            }}
                                        />
                                    </div>
                                )}
                            </label>

                            <label
                                htmlFor="produk_foto_4"
                                className="relative text-gray-400 focus-within:text-gray-600 block"
                            >
                                <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                                <Input
                                    type="file"
                                    {...register("produk_foto_4")}
                                    className="w-32 h-32 text-transparent"
                                    onChange={(event) => {
                                        const { files, displayUrl } = getImageData(event);
                                        imageHandle(4, displayUrl);
                                    }}
                                ></Input>
                                {preview[4] && (
                                    <div>
                                        <img
                                            src={preview[4]}
                                            className="absolute inset-0 w-32 h-32 object-cover"
                                        />
                                        <BsTrash
                                            className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2"
                                            onClick={() => {
                                                { unregister("produk_foto_4"); }
                                                imageHandle(5, "");
                                            }}
                                        />
                                    </div>
                                )}
                            </label>
                        </div>
                    </div>

                    <div id="varian-produk" className="mt-4 bg-slate-50 p-4">
                        {isVariant ? (
                            <div className="w-full flex flex-col">
                                <div className="flex justify-between">
                                    <div>
                                        <h1 className="font-bold text-xl mb-2">Varian Produk</h1>
                                        <p className="text-gray-400 text-sm mb-2">
                                            Tambah varian agar pembeli dapat memilih produk yang
                                            sesuai, yuk!
                                        </p>
                                    </div>
                                    <Button
                                        variant={"outline"}
                                        className="rounded-2xl self-end"
                                        onClick={() => {
                                            setVariant(false);
                                            setVariantValue([]);
                                            setVariantOptions([]);
                                        }}
                                    >
                                        <BsTrash className="me-2" />
                                        Hapus Varian
                                    </Button>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant={"outline"}
                                        className="rounded-2xl"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            variantHandle(0, "Ukuran");
                                            setCurrentVariant("0");
                                        }}
                                    >
                                        Ukuran
                                    </Button>
                                    <Button
                                        variant={"outline"}
                                        className="rounded-2xl"
                                        onClick={() => {
                                            variantHandle(1, "Warna");
                                            setCurrentVariant("1");
                                        }}
                                    >
                                        Warna
                                    </Button>
                                    <Button
                                        variant={"outline"}
                                        className="rounded-2xl"
                                        onClick={() => {
                                            variantHandle(2, "Ukuran Kemasan");
                                            setCurrentVariant("2");
                                        }}
                                    >
                                        Ukuran Kemasan
                                    </Button>
                                    <Button variant={"outline"} className="rounded-2xl">
                                        <BsPlusCircle className="me-2" />
                                        Tambah Varian
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="font-bold text-xl mb-2">Varian Produk</h1>
                                    <p className="text-gray-400 text-sm mb-2">
                                        Tambah varian agar pembeli dapat memilih produk yang sesuai,
                                        yuk!
                                    </p>
                                </div>
                                <Button
                                    variant={"outline"}
                                    className="rounded-2xl self-end"
                                    onClick={() => {
                                        setVariant(true);
                                    }}
                                >
                                    <BsPlusCircle className="me-2" />
                                    Tambah Varian
                                </Button>
                            </div>
                        )}

                        <div className="mt-2">
                            {variant.map((item, i) => (
                                <div className="w-full flex flex-col" key={i}>
                                    <p className="my-2">{item}</p>
                                    <Form {...formUse}>
                                        <form className="w-2/3 space-y-6 flex gap-4 items-center">
                                            <div className="flex items-center gap-4">
                                                <Input placeholder="Ukuran" {...formUse.register("options")} />
                                                <Button
                                                    className=""
                                                    onClick={formUse.handleSubmit(onSubmit)}
                                                >
                                                    Tambahkan
                                                </Button>
                                            </div>
                                        </form>
                                    </Form>
                                    <div className="flex gap-4 mt-4">
                                        {variantOptions[i] &&
                                            variantOptions[i].map((item, x) => (
                                                <div>
                                                    <Button
                                                        key={x}
                                                        onClick={() => {
                                                            deleteVariantOptionHandle(i, x);
                                                        }}
                                                        className="bg-red-500"
                                                    >
                                                        <BsTrash className="me-2" />
                                                        {item}
                                                    </Button>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                            {/* {variantOptions[0] && (
                <div>
                  <p className="my-4">Tampilkan Gambar Varian</p>
                  <Switch onClick={()=> handleVariantSwitch(x,!isVariantOption[x])}/>
                </div>
              )} */}
                            {variantOptions[0] && (
                                <div className="flex justify-between mt-8">
                                    <div className="flex flex-col">
                                        <h1 className="font-bold">Atur Sekaligus</h1>
                                        <p className="text-gray-500">
                                            Kamu dapat mengatur harga, stok dan SKU sekaligus
                                        </p>
                                    </div>
                                    <Button
                                        variant={"outline"}
                                        className="rounded-2xl bg-blue-500 text-white"
                                    >
                                        <BsPlusCircle className="me-2" />
                                        Atur Sekaligus
                                    </Button>
                                </div>
                            )}

                            <div className="flex flex-col gap-4 mt-4">
                                {variantOptions[parseInt(currentVariant)] &&
                                    variantOptions[parseInt(currentVariant)].map((item, x) => (
                                        <div>
                                            <div className="flex gap-4 mb-2 mt-4 ">
                                                <Switch onClick={() => handleVariantGambarSwitch(x, !isVariantGambar[x])} />
                                                <p>Gunakan Gambar Varian</p>
                                            </div>
                                            {isVariantGambar[x] &&
                                                <div>
                                                    <label
                                                        htmlFor={"varian-option" + x}
                                                        className="relative text-gray-400 focus-within:text-gray-600 block"
                                                    >
                                                        <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                                                        <Input
                                                            type="file"
                                                            name={"varian-option" + x}
                                                            className="w-32 h-32 text-transparent"
                                                            onChange={(event) => {
                                                                const { files, displayUrl } = getImageData(event);
                                                                imageOptionHandle(x, displayUrl);
                                                            }}
                                                        ></Input>
                                                        {previewOptions[x] && (
                                                            <div>
                                                                <img
                                                                    src={previewOptions[x]}
                                                                    className="absolute inset-0 w-32 h-32 object-cover"
                                                                />
                                                                <BsTrash
                                                                    className="absolute z-1 inset-0 text-xl text-red-600 font-bold m-2"
                                                                    onClick={() => {
                                                                        imageOptionHandle(x, "");
                                                                    }}
                                                                />
                                                            </div>
                                                        )}
                                                    </label>
                                                </div>
                                            }
                                        </div>
                                    ))}
                            </div>


                            {variantOptions[0] &&
                                variantOptions[0].map((item, x) => (
                                    <>
                                        <div className="flex items-center mb-2 mt-4 gap-2">
                                            <p>{item}</p>
                                            <Switch onClick={() => handleVariantSwitch(x, !isVariantOption[x])} />
                                            <p>Aktif</p>
                                        </div>

                                        {isVariantOption[x] &&
                                            <div className="mb-12">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex justify-center items-center mt-2 w-1/2">
                                                            <p className="bg-slate-100 py-2 px-4 rounded-s-lg border-2 text-sm">
                                                                Rp.
                                                            </p>
                                                            <Input
                                                                placeholder="Harga"
                                                                className="rounded-s-none rounded-e-xl"
                                                            />
                                                        </div>
                                                        <div className="flex justify-center items-center mt-2 w-1/2">
                                                            <Input
                                                                placeholder="Stok Produk"
                                                                className="rounded-xl"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex justify-center items-center mt-2 w-1/2">
                                                            <Input
                                                                placeholder="Stok Keeping Unit"
                                                                className="rounded-xl"
                                                            />
                                                        </div>
                                                        <div className="flex justify-center items-center mt-2 w-1/2">
                                                            <Input
                                                                placeholder="Berat Produk"
                                                                className="rounded-e-none rounded-s-xl"
                                                            />
                                                            <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                                                                Kg
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="mt-4">Ukuran Produk</p>
                                                <div className="flex gap-4">
                                                    <div className="flex justify-center items-center mt-2">
                                                        <Input
                                                            placeholder="Panjang"
                                                            className="rounded-e-none rounded-s-xl"

                                                        />
                                                        <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                                                            cm
                                                        </p>
                                                    </div>

                                                    <div className="flex justify-center items-center mt-2">
                                                        <Input
                                                            placeholder="lebar"
                                                            className="rounded-e-none rounded-s-xl"

                                                        />
                                                        <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                                                            cm
                                                        </p>
                                                    </div>

                                                    <div className="flex justify-center items-center mt-2">
                                                        <Input
                                                            placeholder="tinggi"
                                                            className="rounded-e-none rounded-s-xl"

                                                        />
                                                        <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                                                            cm
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>}

                                    </>
                                ))}
                        </div>
                    </div>

                    {!isVariant &&
                        <div>
                            <div id="harga" className="mt-4 bg-slate-50 p-4">
                                <h1 className="font-bold text-xl mb-4">Harga</h1>
                                <p>Harga</p>
                                <div className="flex justify-center items-center mt-2">
                                    <p className="bg-slate-100 py-2 px-4 rounded-s-lg border-2 text-sm">
                                        Rp.
                                    </p>
                                    <Input
                                        placeholder="Harga"
                                        className="rounded-s-none rounded-e-xl"
                                        {...register("produk_harga")}
                                    />
                                </div>

                                <p className="mt-4">Minimal Pembelian</p>
                                <div className="flex justify-center items-center mt-2">
                                    <Input
                                        placeholder="Produk"
                                        className="rounded-e-none rounded-s-xl"
                                        {...register("produk_min_beli")}
                                    />
                                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                                        Produk
                                    </p>
                                </div>
                            </div>

                            <div id="pengelolaan-produk" className="mt-4 bg-slate-50 p-4">
                                <h1 className="font-bold text-xl mb-4">Pengelolaan Produk</h1>
                                <div className="flex gap-4">
                                    <div>
                                        <p>Stok Produk</p>
                                        <Input
                                            {...register("produk_stok")}></Input>
                                    </div>
                                    <div>
                                        <p>SKU(Stok Keeping Unit)</p>
                                        <Input
                                            {...register("produk_sku")}></Input>
                                    </div>
                                </div>
                            </div>

                            <div id="ukuran" className="mt-4 bg-slate-50 p-4">
                                <h1 className="font-bold text-xl mb-4">Ukuran Produk</h1>

                                <p>Berat Produk</p>
                                <div className="flex items-center">
                                    <Input
                                        placeholder="Berat Produk"
                                        className="rounded-e-none rounded-s-xl"
                                        {...register("produk_berat")}
                                    />
                                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                                        Kg
                                    </p>
                                </div>

                                <p>Ukuran Produk</p>
                                <div className="flex gap-4">
                                    <div className="flex justify-center items-center mt-2">
                                        <Input
                                            placeholder="Panjang"
                                            className="rounded-e-none rounded-s-xl"
                                            {...register("produk_panjang")}
                                        />
                                        <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                                            cm
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center mt-2">
                                        <Input
                                            placeholder="Lebar"
                                            className="rounded-e-none rounded-s-xl"
                                            {...register("produk_lebar")}
                                        />
                                        <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                                            cm
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center mt-2">
                                        <Input
                                            placeholder="Tinggi"
                                            className="rounded-e-none rounded-s-xl"
                                            {...register("produk_tinggi", { valueAsNumber: true })}
                                        />
                                        <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                                            cm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>}

                    <div className="flex justify-between gap-4 mt-4 bg-slate-50 p-4 w-full">
                        <Button variant={"outline"} className="rounded-3xl self-start">
                            Preview Halaman Checkout
                        </Button>
                        <div>
                            <Button variant={"outline"} className="rounded-3xl me-2">
                                Batal
                            </Button>
                            <Button
                                variant={"outline"}
                                type="submit"
                                className="bg-blue-600 text-white rounded-3xl"
                            >
                                Simpan
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
