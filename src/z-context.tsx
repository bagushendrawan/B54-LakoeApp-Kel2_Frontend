import { create } from "zustand";

type courierType = {
  name: string;
  service: string;
  duration: string;
  price: number;
  logo: string;
};

type StoreLocation = {
  address: string;
};

type StoreUser = {
  name: string;
  slogan: string;
  description: string;
  logo_attachment: string;
  banner_attachment: string;
  location: StoreLocation[];
};

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role_id: number;
  isVerified: boolean;
  store_id: string;
  store: StoreUser;
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
  logout: () => void;
  SET_BANK: (newBank: bankAccount[]) => void;
  bank: bankAccount[];
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
    store: {
      name: "",
      slogan: "",
      description: "",
      logo_attachment: "",
      banner_attachment: "",
      location: [{ address: "" }],
    },
  },
  SET_USER: (newUser: User) => set({ user: newUser }),
  discount: {
    id: "",
    code: "",
    amount: 0,
  },
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
        store: {
          name: "",
          slogan: "",
          description: "",
          logo_attachment: "",
          banner_attachment: "",
          location: [{ address: "" }],
        },
      },
    });
    localStorage.removeItem("token");
  },
  produk: {
    product_id: "",
    varian_id: "",
  },
  SET_PRODUCT: (newProduct: productCreated) => set({ produk: newProduct }),
  bank: [
    {
      id: "",
      bank: "",
      acc_number: "",
      acc_name: "",
      store_id: "",
      created_at: new Date(""),
      updated_at: new Date(""),
    },
  ],
  SET_BANK: (newBank: bankAccount[]) => set({ bank: newBank }),
}));

export default useStore;
