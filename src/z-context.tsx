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

type Store = {
  user: User;
  SET_USER: (newUser: User) => void;
  logout: () => void;
  SET_PRODUCT: (newProduct: productCreated) => void;
  produk: productCreated;
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
}));

export default useStore;
