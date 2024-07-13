import { create } from 'zustand'

type Store = {
    user: string
    SET_USER: (newUser : string) => void
    logout: () => void
  }
const useStore = create<Store>() ((set) => ({
    user: "",
    SET_USER: (newUser : string) => set(({ user: newUser })),
    logout: () => set({ user: "" }),
}))

export default useStore;