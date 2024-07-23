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
}));

export default useStore;
