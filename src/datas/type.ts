// export type store = {
//   id: number | null;
//   namaToko: string;
//   selogan: string;
//   deskripsi: string;
//   image?: string | null | File | undefined;
//   completed: boolean;
// };

export type Location = [{
  id: number|null;
  namaLokasi: string;
  alamat: string;
  kota: string;
  kodePos: string;
  pinPoint: string;
  completed?: boolean;
}];

export type Informasi ={
  id: number ;
  namaToko: string;
  selogan: string;
  deskripsi: string;
  image?: string | null | File | undefined;
  completed?: boolean;
}