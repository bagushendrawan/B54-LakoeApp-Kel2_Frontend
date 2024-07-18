export function RingkasanPesanan() {
  return (
    <>
      <div className="border border-blue-900 bg-blue-300 w-5/6 rounded-lg p-3 mb-4">
        <p>Ringkasan Pesanan</p>

        <div className="mt-3 flex gap-3 items-center">
          <img src="" alt="image" className="w-3/12 rounded-sm" />

          <div className="text-s">
            <p>Nama Produk</p>
            <p>1 item (100gr)</p>
            <p>Rp 120.0000</p>
          </div>
        </div>

        <div className="flex justify-between items-center my-4">
          <p>Total Harga (1)</p>
          <p>Rp 120000</p>
        </div>
        <div className="flex justify-between items-center pb-4 border-b-2">
          <p>Biaya Pengiriman</p>
          <p>Rp 190.000</p>
        </div>
        <div className="flex justify-between items-center my-4">
          <p>Total Pembayaran (1)</p>
          <p>Rp 190.000</p>
        </div>
      </div>
    </>
  );
}
