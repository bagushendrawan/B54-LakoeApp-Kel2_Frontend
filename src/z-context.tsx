import { create } from "zustand";

type courierType = {
  name: string;
  service: string;
  duration: string;
  price: number;
  logo: string;
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

type productCreated = {
  product_id: string;
  varian_id: string;
};

type discount = {
  id: string;
  code: string;
  amount: number;
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
  discount: discount;
  SET_DISCOUNT: (newDisc: discount) => void;
  DELETE_DISCOUNT: () => void;
  totalPrice: number;
  SET_TOTAL: (newTotal: number) => void;
  DELETE_TOTAL: () => void;
  logout: () => void;
};

const useStore = create<Store>()((set) => ({
  courier: [
    {
      name: "",
      service: "",
      duration: "",
      price: 0,
      logo: "",
    },
  ],
  setCourier: (newCourier: courierType[]) => set({ courier: newCourier }),
  selectedCourier: {
    name: "",
    service: "",
    duration: "",
    price: 0,
    logo: "",
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
  discount: {
    id: "",
    code: "",
    amount: 0,
  },
  totalPrice: 0,
  DELETE_TOTAL: () => {
    set({
      totalPrice: 0,
    });
  },
  SET_TOTAL: (newTotal: number) => set({ totalPrice: newTotal }),
  SET_DISCOUNT: (newDisc: discount) => set({ discount: newDisc }),
  DELETE_DISCOUNT: () => {
    set({
      discount: {
        id: "",
        code: "",
        amount: 0,
      },
    });
  },
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
