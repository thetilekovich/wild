import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchPopularProducts = createAsyncThunk(
    'users/fetchByIdStatus',
    async (thunkAPI) => {
        const response = await axios('https://fakestoreapi.com/products')
        return response.data
    }
  )
