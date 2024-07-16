import { create } from 'zustand'

type userType = {
    id: string,
    name: string,
    email: string,
    phone: string,
    role_id: number,
    isVerified: boolean,
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
    },});
    localStorage.removeItem("token");
  },
}))

export default useStore;