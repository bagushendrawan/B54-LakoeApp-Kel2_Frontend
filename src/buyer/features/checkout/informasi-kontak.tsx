import { Input } from "@/components/input";
import { Label } from "@/components/label";
import useStore from "@/z-context";

export function InformasiKontak() {
  const user = useStore((state) => state.user)
  // console.log(user);
  
  return (
    <>
      <div className="p-3 border border-black rounded-md mb-5">
        <h1 className="font-bold mt-3">Informasi Kontak</h1>
        <div className="space-y-1">
          <Label htmlFor="nama">Nama</Label>
          <Input
            id="nama"
            name="name"
            className="border-black"
            defaultValue={user.name}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone-input">Nomor Whatsapp</Label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <p>+62</p>
            </div>
            <Input
              type="text"
              id="phone-input"
              className="border border-black w-full ps-12"
              placeholder="123-456-7890"
              defaultValue={user.phone}
            />
          </div>
        </div>
      </div>
    </>
  );
}
