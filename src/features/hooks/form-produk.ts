import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type formDTO = {
    produk_nama: string,
    produk_url_checkout: string,
    produk_kategori: string,
    produk_deskripsi: string,
    produk_foto: File | null,
    produk_foto_1: File | null,
    produk_foto_2: File | null,
    produk_foto_3: File | null,
    produk_foto_4: File | null,
    produk_harga: number,
    produk_min_beli: number,
    produk_stok: number,
    produk_sku: number,
    produk_berat: number,
    produk_panjang: number,
    produk_lebar: number,
    produk_tinggi: number
  }

  const FormSchema = z.object({
    produk_nama: z.string(),
    produk_url_checkout: z.string(),
    produk_kategori: z.string(),
    produk_deskripsi: z.string(),
    produk_foto: z.any(),
    produk_foto_1: z.any(),
    produk_foto_2: z.any(),
    produk_foto_3: z.any(),
    produk_foto_4: z.any(),
    produk_harga: z.any(),
    produk_min_beli: z.any(),
    produk_stok: z.any(),
    produk_sku: z.any(),
    produk_berat: z.any(),
    produk_panjang: z.any(),
    produk_lebar: z.any(),
    produk_tinggi: z.any()
  });

export const useProdukForm = () => {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
    control
  } = useForm<formDTO>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
  });

  const onSubmitForm: SubmitHandler<formDTO> = (data) => {
    try {
    console.log("hit submit")
     console.log(data)
    } catch (error) {
      console.log(error)
    }
  };

  return {
    register,
    unregister,
    handleSubmit,
    onSubmitForm,
    errors,
    control
  };
};
