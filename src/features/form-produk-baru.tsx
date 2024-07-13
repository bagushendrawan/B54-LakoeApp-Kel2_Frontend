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
import { ChangeEvent, useEffect, useState } from "react";
import { BsChatRight, BsChevronBarRight, BsImage, BsPlusCircle, BsTrash } from "react-icons/bs";
import { Button } from "../components/button";
import { Input } from "../components/input";

import { Switch } from "@/components/switch";
import { Textarea } from "@/components/textarea";
import { useForm } from "react-hook-form";
import {
  Form
} from "../components/form";
import { useProdukForm } from "./hooks/form-produk";
import { Label } from "@/components/label";

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
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "About",
    url: "/about",
  },
];

export function FormProdukBaru() {
  const {
    handleSubmit,
    register,
    errors,
    control,
    unregister,
    onSubmitForm,
    setValue,
    getValues,
    isSubmitting
  } = useProdukForm();

  const [isVariant, setVariant] = useState<Boolean>(false);
  const [preview, setPreview] = useState<string[]>([]);
  const [previewOptions, setPreviewOptions] = useState<string[]>([]);
  const [variant, setVariantValue] = useState<string[]>([]);
  const [variantOptions, setVariantOptions] = useState<string[][]>([]);
  const [currentVariant, setCurrentVariant] = useState<string>("");
  const [isVariantOption, setIsVariantOption] = useState<boolean[]>([]);
  const [isVariantGambar, setIsVariantGambar] = useState<boolean[]>([]);
  const [kategori, setKategori] = useState<string>("");
  const [hargaValue, sethargaValue] = useState<number[]>([]);
  const [stokValue, setstokValue] = useState<number[]>([]);
  const [skuValue, setskuValue] = useState<string[]>([]);
  const [weightValue, setweightValue] = useState<number[]>([]);
  const [panjangValue, setPanjangValue] = useState<number[]>([]);
  const [lebarValue, setLebarValue] = useState<number[]>([]);
  const [tinggiValue, setTinggiValue] = useState<number[]>([]);
  const [kategoriArray, setKategoriArray] = useState<string[]>([]);
  const [imageVarian, setImageVarian] = useState<(File | null)[]>([]);

  // const handleChangeVariant = (value :  string, index: number, event: React.ChangeEvent<HTMLInputElement>) => {
  //   const price = { ...hargaValue };
  //   price[index] = Number(event.target.value);
  //   sethargaValue(price);
  //   setValue(value, price);
  // };

  const handlehargaChange = (index: number, event: any) => {
    const price = { ...hargaValue };
    price[index] = event.target.value;
    sethargaValue(price);
    setValue("produk_ukuran_option_price", price);
    // register("produk_ukuran_option_price",{value: price, valueAsNumber : true})
  };

  const handleWeightChange = (index: number, event: any) => {
    const price = { ...weightValue };
    price[index] = event.target.value;
    setweightValue(price);
    // register("produk_ukuran_option_weight", { value: price });
    setValue("produk_ukuran_option_weight", price);
  };

  const handleStokChange = (index: number, event: any) => {
    const price = { ...stokValue };
    price[index] = event.target.value;
    setstokValue(price);
    // register("produk_ukuran_option_stock", { value: price });
    setValue("produk_ukuran_option_stock", price);
  };

  const handlePanjang = (index: number, event: any) => {
    const price = { ...panjangValue };
    price[index] = event.target.value;
    setPanjangValue(price);
    // register("produk_ukuran_option_panjang", { value: price });
    setValue("produk_ukuran_option_panjang", price);
    console.log("panjang", price);
  };

  const handleLebar = (index: number, event: any) => {
    const price = { ...lebarValue };
    price[index] = event.target.value;
    setLebarValue(price);
    // register("produk_ukuran_option_lebar", { value: price });
    setValue("produk_ukuran_option_lebar", price);
  };

  const handleTinggi = (index: number, event: any) => {
    const price = { ...tinggiValue };
    price[index] = event.target.value;
    setTinggiValue(price);
    // register("produk_ukuran_option_tinggi", { value: price });
    setValue("produk_ukuran_option_tinggi", price);
  };

  const handleSKUChange = (index: number, event: any) => {
    const price = { ...skuValue };
    price[index] = event.target.value;
    setskuValue(price);
    // register("produk_ukuran_option_sku", { value: price });
    setValue("produk_ukuran_option_sku", price);
  };

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

  function imageOptionHandle(index: number, url: string, img : File | null) {
    const newImg = [...imageVarian]
    newImg[index] = img;
    setImageVarian(newImg);
    const newUrl = [...previewOptions];
    newUrl[index] = url;
    setPreviewOptions(newUrl);
    setValue("produk_ukuran_option_img", newImg);
    console.log(newUrl);
  }

  function variantOptionHandle(x: number, option: string) {
    if (!variantOptions[x]) variantOptions[x] = [];
    const vary: string[][] = [...variantOptions];
    vary[x].push(option);
    setVariantOptions(vary);
    console.log("Variant OPTIONNNS", variantOptions);
    {
      register("produk_ukuran_option", { value: vary[x] });
    }
  }

  function deleteVariantOptionHandle(x: number, y: number) {
    const vary = [...variantOptions];
    vary[x].splice(y, 1);
    setVariantOptions(vary);
    setValue("produk_ukuran_option", vary[x])
    console.log(variantOptions);
  }

  function variantHandle(index: number, vary: string) {
    const variants = [...variant];
    variants[index] = vary;
    setVariantValue(variants);
    console.log(variants);
  }

  function handleVariantSwitch(index: number, bool: boolean) {
    if (!isVariantOption[index]) isVariantOption[index] = false;
    const variants = [...isVariantOption];
    variants[index] = bool;
    setIsVariantOption(variants);
    console.log(variants);
  }

  function handleVariantGambarSwitch(index: number, bool: boolean) {
    if (!isVariantGambar[index]) isVariantGambar[index] = false;
    const variants = [...isVariantGambar];
    variants[index] = bool;
    setIsVariantGambar(variants);
    console.log(variants);
  }

  function kategoriHandle(event : any) {
    // console.log("kategori", event)
    setKategori(event);
    setValue("produk_kategori", event);
  }

  function kategoriArrayHandle(index : number,event : any) {
    const variants = [...kategoriArray];
    variants[index] = event;
    setKategoriArray(variants);
    console.log(event);
  }

  useEffect(() => {
    console.log("variantopt", variantOptions);
  }, [variantOptions]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)} className="w-full">
        <div className="flex flex-col gap-2">
          {/* informasi produk */}
          <div id="informasi-produk" className=" bg-white p-4 rounded">
            <h1 className="font-bold text-xl mb-4">Informasi Produk</h1>
            <h1 className=" text-md mb-2 mt-4">Nama Produk <Label className="text-red-600">*</Label></h1>
            <Input
              placeholder="Masukan nama produk"
              {...register("produk_nama")}
              required
            />

            <h1 className=" text-md mb-2 mt-4">URL Halaman Checkout <Label className="text-red-600">*</Label></h1>
            <div className="flex justify-center items-center">
              <p className="bg-slate-100 p-3 rounded-s-lg border-2 text-xs">
                lakoe.store/
              </p>
              <Input
                placeholder="nama-produk"
                className="rounded-s-none rounded-e-xl"
                {...register("produk_url_checkout")}
                required
              />
            </div>
            <div className="flex gap-2">
              <p className="font-normal mt-4">Kategori <Label className="text-red-600">*</Label></p>
              <p className="font-normal mt-4">
                {kategori && kategori}
              </p>
            </div>

            <Select
              onValueChange={(e) => {
                unregister("produk_kategori");
                kategoriHandle(e);
                kategoriArrayHandle(0,e);
              }}
              required
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  
                    {/* <Select
                      onValueChange={(e) => {
                        unregister("produk_kategori");
                        kategoriHandle(e);
                      }}
                    >
                    <SelectTrigger className="w-[180px]" onClick={(e) => {kategoriArrayHandle(0,e)}}>
                      <SelectValue placeholder="Apple" defaultValue="Apple"/>
                    </SelectTrigger>
                    <SelectContent side="right">
                      <SelectGroup>
                        <SelectLabel>{kategoriArray[0]}</SelectLabel>
                        <SelectItem value="apple" onChange={(e) => {kategoriArrayHandle(0,e)}}>Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select
                      onValueChange={(e) => {
                        unregister("produk_kategori");
                        kategoriHandle(e);
                        kategoriArrayHandle(1,e);
                      }}
                    >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Apple" />
                    </SelectTrigger>
                    <SelectContent side="right" position="item-aligned" className="absolute left-52">
                      <SelectGroup>
                        <SelectLabel>{kategoriArray[0]}</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select
                      onValueChange={(e) => {
                        unregister("produk_kategori");
                        kategoriArrayHandle(1,e);
                      }}
                    >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Apple" />
                    </SelectTrigger>
                    <SelectContent side="right" position="item-aligned" className="absolute left-52">
                      <SelectGroup>
                        <SelectLabel>{kategoriArray[0]}</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select> */}
                        <SelectItem value="Elektronik">Elektronik</SelectItem>
                        <SelectItem value="Makanan">Makanan</SelectItem>
                        <SelectItem value="Kesehatan">Kesehatan</SelectItem>
                        <SelectItem value="Pakaian">Pakaian</SelectItem>
                        <SelectItem value="Furnitur">Furnitur</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* <DetailProduk/> */}
          <div id="detail-produk" className="bg-white p-4 rounded">
            <h1 className="font-bold text-xl mb-4">Detail Produk</h1>
            <p className="mb-2">Deskripsi</p>
            <Textarea {...register("produk_deskripsi")} className="h-32" />
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
                        {
                          unregister("produk_foto");
                        }
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
                        {
                          unregister("produk_foto_1");
                        }
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
                        {
                          unregister("produk_foto_2");
                        }
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
                        {
                          unregister("produk_foto_3");
                        }
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
                        {
                          unregister("produk_foto_4");
                        }
                        imageHandle(5, "");
                      }}
                    />
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* variant */}
          <div id="varian-produk" className="bg-white p-4 rounded">
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
                      unregister("produk_ukuran_option");
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
                      // {register("produk_ukuran_option",{value: variant})}
                    }}
                  >
                    Ukuran
                  </Button>
                  {/* <Button
                    variant={"outline"}
                    className="rounded-2xl"
                    onClick={() => {
                      variantHandle(1, "Warna");
                      setCurrentVariant("1");
                    }}
                  >
                    Warna
                  </Button> */}
                  {/* <Button
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
                  </Button> */}
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
                    setValue("produk_berat", NaN);
                    setValue("produk_panjang",NaN);
                    setValue("produk_harga",NaN);
                    setValue("produk_lebar",NaN);
                    setValue("produk_tinggi",NaN);
                    setValue("produk_berat",NaN);
                    setValue("produk_sku","");
                    setValue("produk_stok",NaN);
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
                        <Input
                          placeholder="Ukuran"
                          {...formUse.register("options")}
                        />
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
                        <div key={x}>
                          <Button
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
                        <Switch
                          onClick={() =>
                            handleVariantGambarSwitch(x, !isVariantGambar[x])
                          }
                        />
                        <p>Gunakan Gambar Varian</p>
                      </div>
                      {isVariantGambar[x] && (
                        <div>
                          <label
                            htmlFor={"varian-option" + x}
                            className="relative text-gray-400 focus-within:text-gray-600 block"
                          >
                            <BsImage className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-12" />
                            <Input
                              type="file"
                              className="w-32 h-32 text-transparent"
                              onChange={(event) => {
                                const { files, displayUrl } =
                                  getImageData(event);
                                imageOptionHandle(x, displayUrl,files[0]);
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
                                    imageOptionHandle(x, "", null);
                                  }}
                                />
                              </div>
                            )}
                          </label>
                        </div>
                      )}
                    </div>
                  ))}
              </div>

              {variantOptions[0] &&
                variantOptions[0].map((item, x) => (
                  <>
                    <div className="flex items-center mb-2 mt-4 gap-2">
                      <p>{item}</p>
                      <Switch
                        onClick={() =>
                          handleVariantSwitch(x, !isVariantOption[x])
                        }
                      />
                      <p>Aktif</p>
                    </div>

                    {isVariantOption[x] && (
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
                                name="harga"
                                value={hargaValue[x]}
                                onChange={(e) => handlehargaChange(x, e)}
                              />
                            </div>
                            <div className="flex justify-center items-center mt-2 w-1/2">
                              <Input
                                placeholder="Stok Produk"
                                className="rounded-xl"
                                value={stokValue[x]}
                                onChange={(e) => handleStokChange(x, e)}
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex justify-center items-center mt-2 w-1/2">
                              <Input
                                placeholder="Stok Keeping Unit"
                                className="rounded-xl"
                                value={skuValue[x]}
                                onChange={(e) => handleSKUChange(x, e)}
                              />
                            </div>
                            <div className="flex justify-center items-center mt-2 w-1/2">
                              <Input
                                placeholder="Berat Produk"
                                className="rounded-e-none rounded-s-xl"
                                value={weightValue[x]}
                                onChange={(e) => handleWeightChange(x, e)}
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
                              value={panjangValue[x]}
                              onChange={(e) => handlePanjang(x, e)}
                            />
                            <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                              cm
                            </p>
                          </div>

                          <div className="flex justify-center items-center mt-2">
                            <Input
                              placeholder="lebar"
                              className="rounded-e-none rounded-s-xl"
                              value={lebarValue[x]}
                              onChange={(e) => handleLebar(x, e)}
                            />
                            <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                              cm
                            </p>
                          </div>

                          <div className="flex justify-center items-center mt-2">
                            <Input
                              placeholder="tinggi"
                              className="rounded-e-none rounded-s-xl"
                              value={tinggiValue[x]}
                              onChange={(e) => handleTinggi(x, e)}
                            />
                            <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                              cm
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
            </div>
          </div>

          {/* minimal pembelian */}
          <div className="bg-white p-4 rounded">
            <p className="mt-4">Minimal Pembelian <Label className="text-red-600">*</Label></p>
            <div className="flex justify-center items-center mt-2">
              <Input
                placeholder="Produk"
                className="rounded-e-none rounded-s-xl"
                {...register("produk_min_beli", { valueAsNumber: true })}
                required
              /> 
              <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                Produk
              </p>
            </div>
          </div>

          {/*  */}
          {!isVariant && (
            <div className="flex flex-col gap-2">
              {/* harga */}
              <div id="harga" className="bg-white p-4 rounded">
                <h1 className="font-bold text-xl mb-4">Harga</h1>
                <p>Harga</p>
                <div className="flex justify-center items-center mt-2">
                  <p className="bg-slate-100 py-2 px-4 rounded-s-lg border-2 text-sm">
                    Rp.
                  </p>
                  <Input
                    placeholder="Harga"
                    className="rounded-s-none rounded-e-xl"
                    {...register("produk_harga", { valueAsNumber: true })}
                  />
                </div>
              </div>

              {/* stok */}
              <div id="pengelolaan-produk" className="bg-white p-4 rounded">
                <h1 className="font-bold text-xl mb-4">Pengelolaan Produk</h1>
                <div className="flex gap-4">
                  <div>
                    <p>Stok Produk</p>
                    <Input
                      {...register("produk_stok", { valueAsNumber: true })}
                    ></Input>
                  </div>
                  <div>
                    <p>SKU(Stok Keeping Unit)</p>
                    <Input {...register("produk_sku")}></Input>
                  </div>
                </div>
              </div>

              {/* ukuran */}
              <div id="ukuran" className="bg-white p-4 rounded">
                <h1 className="font-bold text-xl mb-4">Ukuran Produk</h1>

                <p>Berat Produk</p>
                <div className="flex items-center">
                  <Input
                    placeholder="Berat Produk"
                    className="rounded-e-none rounded-s-xl"
                    {...register("produk_berat", { valueAsNumber: true })}
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
                      {...register("produk_panjang", { valueAsNumber: true })}
                    />
                    <p className="bg-slate-100 py-2 px-4 rounded-e-lg border-2 text-sm">
                      cm
                    </p>
                  </div>
                  <div className="flex justify-center items-center mt-2">
                    <Input
                      placeholder="Lebar"
                      className="rounded-e-none rounded-s-xl"
                      {...register("produk_lebar", { valueAsNumber: true })}
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
            </div>
          )}

          {/*  */}
          <div className="flex justify-between gap-4 mt-4 bg-white p-4 w-full rounded">
            <Button variant={"outline"} className="rounded-3xl self-start">
              Preview Halaman Checkout
            </Button>
            <div>
              <Button variant={"outline"} className="rounded-3xl me-2">
                Batal
              </Button>
              {isSubmitting ? <Button
                variant={"outline"}
                type="submit"
                className="bg-blue-600 text-white rounded-3xl"
                disabled
              >
                Simpan
              </Button> : <Button
                variant={"outline"}
                type="submit"
                className="bg-blue-600 text-white rounded-3xl"
              >
                Simpan
              </Button>}
              
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
