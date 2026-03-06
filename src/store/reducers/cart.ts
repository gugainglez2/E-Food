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
      }
    },
    openModal: (state, action: PayloadAction<Food>) => {
      state.modalItem = action.payload
    },
    closeModal: (state) => {
      state.modalItem = null
    }
  }
})

export const { add, openModal, closeModal } = cartSlice.actions
export default cartSlice.reducer
