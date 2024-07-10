import { BsBoxSeam } from "react-icons/bs";

export function DetailProduk() {
  return (
    <>
      <div className="py-4 px-3 text-xl">
        <BsBoxSeam />
      </div>

      <div className="pb-3">
        <p className="font-bold mt-3">Detail Produk</p>

        <div className="border w-full m-2 flex justify-between">
          <div className="flex p-2 gap-3">
            <img
              src="https://down-id.img.susercontent.com/file/ff4ff54d7b4222546bf55bcd85e81660"
              alt="cardImage"
              className="w-20"
            />
            <div>
              <p className="font-bold">
                T-SHIRT BASIC - BLACK WHITE | kaos hitam putih - L
              </p>
              <p className="font-light">3 Barang</p>
            </div>
          </div>

          <div className="p-2">
            <p className="font-light">Total Belanja</p>
            <p className="font-bold">Rp 200.000</p>
          </div>
        </div>
      </div>
    </>
  );
}
