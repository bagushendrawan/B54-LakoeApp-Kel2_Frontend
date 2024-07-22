import { create } from "zustand";

type courierType = {
  name: string;
  service: string;
  duration: string;
  price: number;
};

type userType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role_id: number;
  isVerified: boolean;
  store_id: string;
};

type Store = {
  courier: courierType[];
  setCourier: (newCourier: courierType[]) => void;
  selectedCourier: courierType | undefined;
  setSelectedCourier: (newCourier: courierType | undefined) => void;
  user: userType;
  SET_USER: (newUser: userType) => void;
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
  SET_USER: (newUser: userType) => set({ user: newUser }),
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
}));

export default useStore;
