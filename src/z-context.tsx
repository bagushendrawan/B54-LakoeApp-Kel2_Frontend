import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role_id: number;
  isVerified: boolean;
  store_id: string;
};

type userType = {
  token: string;
  user: User;
};

type productCreated = {
  product_id: string;
  varian_id: string;
};

type bankAccount = {
  id: string;
  bank: string;
  acc_number: string;
  acc_name: string;
  store_id: string;
  created_at: Date;
  updated_at: Date;
};

type Store = {
  user: User;
  SET_USER: (newUser: User) => void;
  logout: () => void;
  SET_PRODUCT: (newProduct: productCreated) => void;
  produk: productCreated;
  SET_BANK: (newBank: bankAccount[]) => void;
  bank: bankAccount[]
};

const useStore = create<Store>()((set) => ({
  user: {
    id: "",
    name: "",
    email: "",
    phone: "",
    role_id: NaN,
    isVerified: false,
    store_id: "",
  },
  SET_USER: (newUser: User) => set({ user: newUser }),
  logout: () => {
    set({
      user: {
        id: "",
        name: "",
        email: "",
        phone: "",
        role_id: NaN,
        isVerified: false,
        store_id: "",
      },
    });
    localStorage.removeItem("token");
  },
  SET_PRODUCT: (newProduct: productCreated) => set({ produk: newProduct }),
  produk: {
    product_id: "",
    varian_id: "",
  },
  bank: [{
    id: '',
    bank: '',
    acc_number: '',
    acc_name: '',
    store_id: '',
    created_at: new Date(''),
    updated_at: new Date('')
  }],
  SET_BANK: (newBank: bankAccount[]) => set({ bank: newBank })
}));

export default useStore;
