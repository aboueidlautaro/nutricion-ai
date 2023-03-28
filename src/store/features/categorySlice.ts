import { createSlice } from "@reduxjs/toolkit"

export interface categoryState {
  changed: boolean
}

const initialState: categoryState = {
  changed: false,
}

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setChanged: (state, action) => {
      state.changed = action.payload
    },
  },
})

export default categorySlice.reducer

export const { setChanged } = categorySlice.actions
