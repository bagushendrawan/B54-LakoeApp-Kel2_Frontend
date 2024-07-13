import { create } from 'zustand'

type Store = {
    user: boolean
    SET_USER: (newUser : boolean) => void
    logout: () => void
  }
const useStore = create<Store>() ((set) => ({
    user: false,
    SET_USER: (newUser : boolean) => set(({ user: newUser })),
    logout: () => set({ user: false }),
}))

export default useStore;