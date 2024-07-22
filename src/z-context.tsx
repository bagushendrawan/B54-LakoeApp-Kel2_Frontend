import { create } from "zustand";

type courierType = {
  name: string;
  service: string;
  duration: string;
  price: number;
};

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
  courier: courierType[];
  setCourier: (newCourier: courierType[]) => void;
  selectedCourier: courierType | undefined;
  setSelectedCourier: (newCourier: courierType | undefined) => void;
  user: User;
  SET_USER: (newUser: User) => void;
  produk: productCreated;
  SET_PRODUCT: (newProduct: productCreated) => void;
  logout: () => void;
};

const useStore = create<Store>()((set) => ({
  courier: [
    {
      name: "",
      service: "",
      duration: "",
      price: 0,
    },
  ],
  setCourier: (newCourier: courierType[]) => set({ courier: newCourier }),
  selectedCourier: {
    name: "",
    service: "",
    duration: "",
    price: 0,
  },
  setSelectedCourier: (newSelectedCourier: courierType | undefined) =>
    set({ selectedCourier: newSelectedCourier }),
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
  produk: {
    product_id: "",
    varian_id: "",
  },
  SET_PRODUCT: (newProduct: productCreated) => set({ produk: newProduct }),
}));

export default useStore;
