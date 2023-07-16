import { create } from 'zustand'

export const useStore = create<State>()(set => ({
    theme: "",
    setTheme: (theme) => set({ theme })
}))