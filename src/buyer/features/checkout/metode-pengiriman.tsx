import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useStore from "@/z-context";
import { useState } from "react";

interface courierType {
  name: string;
  service: string;
  duration: string;
  price: number;
}

export function MetodePengiriman(props: any) {
  // const [pengiriman, setPengiriman] = useState<courierType | undefined>(
  //   undefined
  // );

  const [selectedPengiriman, setSelectedPengiriman] = useState<
    courierType | undefined
  >();

  const [open, setOpen] = useState(false);

  const courier = useStore((state) => state.courier);
  // console.log("ini kurir", courier);

  const dataCourir: courierType[] = courier;
  // console.log("kurir dipilih", pengiriman);

  const selectedCourier = useStore((state) => state.setSelectedCourier);
  selectedCourier(selectedPengiriman);

  props.form?.setValue("service_charge", selectedPengiriman?.price as number);
  props.form?.setValue("courier_code", selectedPengiriman?.name as string);
  props.form?.setValue(
    "courier_service",
    selectedPengiriman?.service as string
  );

  return (
    <>
      <div className="p-3 border border-black rounded-md mb-5">
        <h1 className="font-bold mb-3">Metode Pengiriman</h1>
        <div className="space-y-1">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              {selectedPengiriman ? (
                <button
                  className="w-2/4 flex justify-between gap-4 items-center border p-2 rounded-lg border-blue-800 bg-blue-100"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <img src="" alt="img" className="w-1/5 h-14" />
                      <div>
                        <p>{selectedPengiriman.service}</p>
                        <p>{selectedPengiriman.name}</p>
                        <p>{selectedPengiriman.duration}</p>
                      </div>
                    </div>
                    <div>{selectedPengiriman.price}</div>
                  </div>
                </button>
              ) : (
                <Button
                  className="px-5 w-5/12 h-12"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Pilih Metode Pengiriman
                </Button>
              )}
            </DialogTrigger>
            <DialogContent className="text-sm">
              <DialogHeader className="border-b-2 py-3">
                <DialogTitle>Pilih Metode Pengiriman</DialogTitle>
              </DialogHeader>

              <div>
                <p className="font-bold">Reguler (2-4 Hari)</p>
                <p>
                  Pembelian diatas pukul 15:00 WIB, pengiriman akan diproses
                  besok
                </p>
              </div>

              <div className="h-80 overflow-y-scroll">
                {dataCourir ? (
                  dataCourir.map((data) => (
                    <button
                      className="w-full flex justify-between gap-4 items-center border p-7"
                      onClick={() => {
                        setSelectedPengiriman(data);
                        setOpen(false);
                      }}
                      key={data.name}
                    >
                      <div className="flex gap-3 items-center">
                        <img src="" alt="gambar" className="w-10" />
                        <p>{data.name}</p>
                      </div>
                      <div>
                        <p>Rp {data.price}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <p>
                    Silakan atur pin point untuk mengetahui kurir yang tersedia!
                  </p>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
