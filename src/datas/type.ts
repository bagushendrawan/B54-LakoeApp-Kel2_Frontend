export type store = {
  id: number;
  namaToko: string;
  selogan: string;
  deskripsi: string;
  image?: string | undefined | File;
  completed: boolean;
};
