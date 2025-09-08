import { create } from 'zustand';

const useCart = create((set) => ({
  items: [],
  addProduct: (product: any) =>
    set((state: any) => ({ items: [...state.items, { product, quantity: 1 }] })),

  //new object with this product and quantity 1
  resetItems: () => set({ items: [] }),
}));

export default useCart;
