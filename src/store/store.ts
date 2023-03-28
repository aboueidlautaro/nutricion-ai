import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "./features/categorySlice"
import { TypedUseSelectorHook, useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    category: categorySlice,
  },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector
