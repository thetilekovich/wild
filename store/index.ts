import { configureStore } from "@reduxjs/toolkit"
import baseSlice from "./slices/baseSlice"

 const store = configureStore({
    reducer: {
        base: baseSlice
    },
    devTools: process.env.NODE_ENV !== "production",
})
export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;