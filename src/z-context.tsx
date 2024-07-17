import { create } from 'zustand'

type userType = {
    id: string,
    name: string,
    email: string,
    phone: string,
    role_id: number,
    isVerified: boolean,
    store_id : string
}

type Store = {
    user: userType
    SET_USER: (newUser : userType) => void
    logout: () => void
  }
const useStore = create<Store>() ((set) => ({
    user: {
      id: "",
      name: "",
      email:"",
      phone: "",
      role_id: NaN,
      isVerified: false,
      store_id: ""
    },
    SET_USER: (newUser : userType) => set(({ user: newUser })),
    logout: () => {
      set({ user: {
      id: "",
      name: "",
      email:"",
      phone: "",
      role_id: NaN,
      isVerified: false,
      store_id : ""
    },});
    localStorage.removeItem("token");
  },
}))

export default useStore;