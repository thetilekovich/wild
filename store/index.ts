import { configureStore } from "@reduxjs/toolkit"
import baseSlice from "./slices/baseSlice"
import productsSlice from "./slices/productsSlice";

 const store = configureStore({
    reducer: {
        base: baseSlice,
        products: productsSlice
    },
    devTools: process.env.NODE_ENV !== "production",
})
export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;