import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Food } from '../../models'

type CartState = {
  items: Food[]
  isOpen: boolean
  modalItem: Food | null
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  modalItem: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Food>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('Este item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    openModal: (state, action: PayloadAction<Food>) => {
      state.modalItem = action.payload
    },
    closeModal: (state) => {
      state.modalItem = null
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, openCart, closeCart, openModal, closeModal, clear } = cartSlice.actions
export default cartSlice.reducer
