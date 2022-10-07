import create from "zustand";

export const useStore = create((set) => ({
  unitStore: "celsius",
  clickF: () => set({ unitStore: "fahrenheit" }),
  clickC: () => set({ unitStore: "celsius" }),
}));
