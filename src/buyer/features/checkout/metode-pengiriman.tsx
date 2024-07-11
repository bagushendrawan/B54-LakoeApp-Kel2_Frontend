import { Label } from "@/components/label";
import { Toggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function MetodePengiriman() {
  return (
    <>
      <div className="p-3 border border-black rounded-md mb-5">
        <h1 className="font-bold mb-3">Metode Pengiriman</h1>
        <div className="space-y-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-5">Pilih Metode Pengiriman</Button>
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

              <div>
                <Toggle className="w-full flex justify-between gap-4 items-center border p-7">
                  <div className="flex gap-3 items-center">
                    <Checkbox id="jnt" />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/J%26T_Express_logo.svg/2560px-J%26T_Express_logo.svg.png"
                      alt="bca"
                      className="w-10"
                    />
                    <Label htmlFor="jnt">J&T</Label>
                  </div>
                  <div>
                    <p>Rp 190.000</p>
                  </div>
                </Toggle>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
