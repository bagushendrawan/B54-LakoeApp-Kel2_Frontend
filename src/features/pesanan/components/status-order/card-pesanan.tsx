import { Button } from "@/components/ui/button";
import { Link, redirect } from "@tanstack/react-router";

export function Semua(props : any) {
  return (
    <>
      <div className="border rounded-lg mb-3">
        <div className="border-b">
          <div className="flex justify-between">
            <div className="p-2">
              <div className="bg-yellow-500 rounded-sm text-white p-2 font-semibold">
                Belum Dibayar
              </div>
              <p>{props.invoice.id}</p>
            </div>
            <div className="p-2">
              <button
                className="border rounded-full py-1 px-3"
                // onClick={`https://api.whatsapp.com/send/?phone=${props.invoice.user.phone}`}
              >
                Hubungi Pembeli
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex p-2 gap-3">
              <img
                src="https://down-id.img.susercontent.com/file/ff4ff54d7b4222546bf55bcd85e81660"
                alt="cardImage"
                className="w-20"
              />
              <div>
                <p className="font-bold">
                  <Link to="/seller/detail-order">
                    {props.invoice.cart.carts_items[0].name}
                  </Link>
                </p>
                <p className="font-light">{props.invoice.cart.carts_items[0].quantity} Barang</p>
              </div>
            </div>

            <div className="p-2">
              <p className="font-light">Total Belanja</p>
              <p className="font-bold">{props.invoice.prices}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function BelumDibayar(props : any) {
  return (
    <>
      <div className="border rounded-lg mb-3">
        <div className="border-b">
          <div className="flex justify-between">
            <div className="p-2">
              <div className="bg-yellow-500 rounded-sm text-white p-2 font-semibold">
                Belum Dibayar
              </div>
              <p>{props.invoice.id}</p>
            </div>
            <div className="p-2">
            {/* `https://api.whatsapp.com/send/?phone=${props.invoice.user.phone}` */}
              <Link to={"https://api.whatsapp.com/send/?phone=6285156703211"}
                className="border rounded-full py-1 px-3"
              >
                Hubungi Pembeli
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex p-2 gap-3">
              <img
                src="https://down-id.img.susercontent.com/file/ff4ff54d7b4222546bf55bcd85e81660"
                alt="cardImage"
                className="w-20"
              />
              <div>
                <p className="font-bold">
                  <Link to="/seller/detail-order">
                    {props.invoice.cart.carts_items[0].name}
                  </Link>
                </p>
                <p className="font-light">{props.invoice.cart.carts_items[0].quantity} Barang</p>
              </div>
            </div>

            <div className="p-2">
              <p className="font-light">Total Belanja</p>
              <p className="font-bold">{props.invoice.prices}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function PesananBaru(props : any) {
  return (
    <>
      <div className="border rounded-lg mb-3">
        <div className="border-b">
          <div className="flex justify-between">
            <div className="p-2">
              <Button
                size={"sm"}
                className="bg-green-500 rounded-sm text-white"
              >
                Pesanan Baru
              </Button>
              <p>{props.invoice.id}</p>
            </div>
            <div className="p-2">
              <button className="border rounded-full py-1 px-3">
                Proses Pesanan
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex p-2 gap-3">
              <img
                src="https://down-id.img.susercontent.com/file/ff4ff54d7b4222546bf55bcd85e81660"
                alt="cardImage"
                className="w-20"
              />
              <div>
                <p className="font-bold">
                  <Link to="/seller/detail-order">
                  {props.invoice.cart.carts_items[0].name}
                  </Link>
                </p>
                <p className="font-light">{props.invoice.cart.carts_items[0].quantity} Barang</p>
              </div>
            </div>

            <div className="p-2">
              <p className="font-light">Total Belanja</p>
              <p className="font-bold">Rp {props.invoice.prices}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiapDikirim(props : any) {
  return (
    <>
      <div className="border rounded-lg mb-3">
        <div className="border-b">
          <div className="flex justify-between">
            <div className="p-2">
              <Button size={"sm"} className="bg-blue-500 rounded-sm text-white">
                Siap Dikirim
              </Button>
              <p>{props.invoice.id}</p>
            </div>
            <div className="p-2">
              <button className="border rounded-full py-1 px-3">
                Hubungi Pembeli
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex p-2 gap-3">
              <img
                src="https://down-id.img.susercontent.com/file/ff4ff54d7b4222546bf55bcd85e81660"
                alt="cardImage"
                className="w-20"
              />
              <div>
                <p className="font-bold">
                  <Link to="/seller/detail-order">
                  {props.invoice.cart.carts_items[0].name}
                  </Link>
                </p>
                <p className="font-light">{props.invoice.cart.carts_items[0].quantity} Barang</p>
              </div>
            </div>

            <div className="p-2">
              <p className="font-light">Total Belanja</p>
              <p className="font-bold">Rp {props.invoice.prices}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function DalamPengiriman(props : any) {
  return (
    <>
      <div className="border rounded-lg mb-3">
        <div className="border-b">
          <div className="flex justify-between">
            <div className="p-2">
              <Button
                size={"sm"}
                className="bg-orange-500 rounded-sm text-white"
              >
                Dalam Pengiriman
              </Button>
              <p>{props.invoice.id}</p>
            </div>
            <div className="p-2">
              <button className="border rounded-full py-1 px-3">
                Lihat Rincian Pengiriman
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex p-2 gap-3">
              <img
                src="https://down-id.img.susercontent.com/file/ff4ff54d7b4222546bf55bcd85e81660"
                alt="cardImage"
                className="w-20"
              />
              <div>
                <p className="font-bold">
                  <Link to="/seller/detail-order">
                  {props.invoice.cart.carts_items[0].name}
                  </Link>
                </p>
                <p className="font-light">{props.invoice.cart.carts_items[0].quantity} Barang</p>
              </div>
            </div>

            <div className="p-2">
              <p className="font-light">Total Belanja</p>
              <p className="font-bold">Rp {props.invoice.prices}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function PesananSelesai(props : any) {
  return (
    <>
      <div className="border rounded-lg mb-3">
        <div className="border-b">
          <div className="flex justify-between">
            <div className="p-2">
              <Button size={"sm"} className="bg-gray-500 rounded-sm">
                Pesanan Selesai
              </Button>
              <p>{props.invoice.id}</p>
            </div>
            <div className="p-2">
              <button className="border rounded-full py-1 px-3">
                Hubungi Pembeli
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex p-2 gap-3">
              <img
                src="https://down-id.img.susercontent.com/file/ff4ff54d7b4222546bf55bcd85e81660"
                alt="cardImage"
                className="w-20"
              />
              <div>
                <p className="font-bold">
                  <Link to="/seller/detail-order">
                  {props.invoice.cart.carts_items[0].name}
                  </Link>
                </p>
                <p className="font-light">{props.invoice.cart.carts_items[0].quantity} Barang</p>
              </div>
            </div>

            <div className="p-2">
              <p className="font-light">Total Belanja</p>
              <p className="font-bold">Rp {props.invoice.prices}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Dibatalkan(props : any) {
  return (
    <>
      <div className="border rounded-lg mb-3">
        <div className="border-b">
          <div className="flex justify-between">
            <div className="p-2">
              <Button size={"sm"} className="bg-red-500 rounded-sm text-white">
                Dibatalkan
              </Button>
              <p>{props.invoice.id}</p>
            </div>{props.invoice.id}
            <div className="p-2">
              <button className="border rounded-full py-1 px-3">
                Hubungi Pembeli
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex p-2 gap-3">
              <img
                src="https://down-id.img.susercontent.com/file/ff4ff54d7b4222546bf55bcd85e81660"
                alt="cardImage"
                className="w-20"
              />
              <div>
                <p className="font-bold">
                  <Link to="/seller/detail-order">
                  {props.invoice.cart.carts_items[0].name}
                  </Link>
                </p>
                <p className="font-light">{props.invoice.cart.carts_items[0].quantity} Barang</p>
              </div>
            </div>

            <div className="p-2">
              <p className="font-light">Total Belanja</p>
              <p className="font-bold">Rp {props.invoice.prices}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
