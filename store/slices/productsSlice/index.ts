import { fetchPopularProducts } from "@/store/actions/fetching/fetchPopularProducts";
import { createSlice } from "@reduxjs/toolkit";

interface IProduct {
    id: number, 
    title: string,
    price: string,
    description: string,
    category: string,
    image: string,
    rating: string
}

interface IState {
    popular: IProduct[],
    recomendation: IProduct[],
    basket: IProduct[],
    favorites: IProduct[],
    sale: IProduct[],
}


const initialState: IState = {
    popular: [],
    recomendation: [],
    basket: [],
    favorites: [],
    sale: [],

}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        addPopularProducts: (state, { payload }) => {
            state.popular = payload
            console.log((state))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPopularProducts.fulfilled, (state, { payload }) => {
            state.popular = payload
        })
    }
})

export const { addPopularProducts } = productSlice.actions
export default productSlice.reducer

