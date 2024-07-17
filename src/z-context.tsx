import { create } from 'zustand'

type User = {
    id: string,
    name: string,
    email: string,
    phone: string,
    role_id: number,
    isVerified: boolean,
    store_id : string
}

type userType = {
  token : string,
  user : User
}

type Store = {
    user: User
    SET_USER: (newUser : User) => void
    logout: () => void
  }
const useStore = create<Store>() ((set) => ({
  user : {
    id: "",
    name: "",
    email:"",
    phone: "",
    role_id: NaN,
    isVerified: false,
    store_id: ""
  },
    SET_USER: (newUser : User) => set(({ user: newUser })),
    logout: () => {
      set({
        user : {
          id: "",
          name: "",
          email:"",
          phone: "",
          role_id: NaN,
          isVerified: false,
          store_id: ""
        }
      });
    localStorage.removeItem("token");
  },
}))

export default useStore;