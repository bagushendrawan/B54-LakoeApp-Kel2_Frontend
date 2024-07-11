import { Button } from "@/components/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/card";

interface Data {
  image: string;
  nama: string;
  ukuran: string;
  harga: string;
}

const datas: Data[] = [
  {
    image:
      "https://tsuburaya-prod.com/wp-content/uploads/2022/03/Ultrawoman-Decker-Top.png",
    nama: "Baju Keren",
    ukuran: "S M L XL",
    harga: "120.000",
  },
  {
    image:
      "https://tsuburaya-prod.com/wp-content/uploads/2022/03/Ultrawoman-Decker-Top.png",
    nama: "Baju Keren",
    ukuran: "M L XL",
    harga: "120.000",
  },
  {
    image:
      "https://tsuburaya-prod.com/wp-content/uploads/2022/03/Ultrawoman-Decker-Top.png",
    nama: "Baju Keren",
    ukuran: "M L XL",
    harga: "120.000",
  },
  {
    image:
      "https://tsuburaya-prod.com/wp-content/uploads/2022/03/Ultrawoman-Decker-Top.png",
    nama: "Baju Keren",
    ukuran: "S M L XL",
    harga: "120.000",
  },
  {
    image:
      "https://tsuburaya-prod.com/wp-content/uploads/2022/03/Ultrawoman-Decker-Top.png",
    nama: "Baju Keren",
    ukuran: "S M L XL",
    harga: "120.000",
  },
];

export function BuyerDashboardPage() {
  return (
    <>
      <div className="bg-white m-3 rounded-lg">
        <h1 className="flex justify-center font-bold py-5 border-b-2 border-b-black">
          Daftar Produk
        </h1>

        <div className="flex flex-wrap justify-center gap-4 m-3 p-3 rounded-lg">
          {datas.map((data) => {
            return (
              <>
                <Card className="w-1/6">
                  <CardContent className="p-3 border-b">
                    <img src={data.image} alt="gambar" className="rounded-lg" />
                  </CardContent>
                  <CardFooter className="flex flex-col p-3">
                    <h1 className="font-bold text">
                      {data.nama}
                    </h1>
                    <p>Ukuran : {data.ukuran}</p>
                    <p>Rp {data.harga}</p>
                    <Button>Beli Sekarang</Button>
                  </CardFooter>
                </Card>

              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
