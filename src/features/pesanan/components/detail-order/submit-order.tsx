import { Button } from "@/components/button";

export function SubmitOrder(props : any) {
    return (
        <>
        <div className="flex justify-between p-4">
            {props.invoice?.status === "BELUM_DIBAYAR" && <button className="border-2 border-red-700 px-2 py-1 rounded-full text-red-700 font-bold">Tolak Pesanan</button>}
            {props.invoice?.status === "PESANAN_BARU" &&  <Button className="border bg-blue-500 text-white font-semibold px-4 rounded-full p-4 me-2">
        Proses Pesanan
      </Button>}
      {props.invoice?.status !== "PESANAN_BARU" && props.invoice?.status !== "PESANAN_BARU" && <Button className="border bg-lime-500 text-white font-semibold px-4 rounded-full p-4  me-2"><a href={"https://api.whatsapp.com/send/?phone=6285156703211"}
      >
        Hubungi Pembeli
      </a></Button>}
        </div>
        </>
    )
}