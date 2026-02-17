import { create } from 'zustand';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    description?: string;
}

interface CartState {
    isOpen: boolean;
    items: CartItem[];
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
    isOpen: false,
    items: [],

    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

    addItem: (newItem) => set((state) => {
        const existingItem = state.items.find((item) => item.id === newItem.id);
        if (existingItem) {
            return {
                items: state.items.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                isOpen: true, // Auto-open cart on add
            };
        }
        return {
            items: [...state.items, { ...newItem, quantity: 1 }],
            isOpen: true,
        };
    }),

    removeItem: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id),
    })),

    updateQuantity: (id, delta) => set((state) => ({
        items: state.items.map((item) => {
            if (item.id === id) {
                const newQuantity = Math.max(0, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter((item) => item.quantity > 0),
    })),

    clearCart: () => set({ items: [] }),
}));
