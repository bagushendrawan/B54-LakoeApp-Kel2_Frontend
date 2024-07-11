import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Axios from "axios";
import { ToastAction } from "../../components/toast"
import { useToast } from "../../components/use-toast"


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
    produk_variant: variantDTO[],
    produk_harga: number,
    produk_min_beli: number,
    produk_stok: number,
    produk_sku: number,
    produk_berat: number,
    produk_panjang: number,
    produk_lebar: number,
    produk_tinggi: number
  }

  type variantDTO = {
    variant_name: string,
    variant_isActive: boolean | true
    variant_options: variantOptionDTO[]
  }

  type variantOptionDTO = {
    variant_option_name: string
    variant_option_value: variantOptionValuesDTO[]
  }

  type variantOptionValuesDTO = {
    values_sku: string,
    values_weight: number,
    values_stock : number,
    values_price : number,
    values_is_active: boolean
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
    produk_tinggi: z.any(),

    // variant_name: z.string().optional,
    // variant_isActive: z.boolean().default(true),
    // variant_option_name: z.string(),
    // values_sku: z.string(),
    // values_weight: z.number(),
    // values_stock : z.number(),
    // values_price : z.number(),
    // values_is_active: z.boolean().default(true)

  });

export const useProdukForm = () => {
    const { toast } = useToast()
 
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

  const onSubmitForm: SubmitHandler<formDTO> = async (data) => {
    try {
    const response = await Axios({
        method: "post",
        url: `http://localhost:3000/form-produk`,
        data: data,
        headers: { "Content-Type": "application/json" },
        })
        console.log("RESPONSE SUCCESS", response)
        toast({
            title: "Add Product Success",
            description: response.data,
          })
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
