import { LaConst, UIModeConst } from "@/constants/app";
import { IBaseSlice } from "@/types/app";
import { createSlice } from "@reduxjs/toolkit";
import rusFlag from '@/public/icons/Flags/russia.png'


const initialState: IBaseSlice = {
    auth: false,
    lang: LaConst.RU,
    UIMode: UIModeConst.WHITE,
    wallet: {id: 'RUB', title: 'Российский рубль', icon: rusFlag },
    location: {
        country: 'Россия',
        city: 'Москва',
        street: '',
        postCode: '',
        homeNumber: '',
        flatNumber: '',
        coordinate: ''
    }
}

const baseSlice = createSlice({
    name: "baseSlice",
    initialState,
    reducers: {
        setLanguage: (state, {payload}) => {
            state.lang = payload
        },
        setMode: (state, {payload}) => {
            state.UIMode = payload
        },
        setWallet: (state, {payload}) => {
            state.wallet = payload
        },
        setLocation: (state, {payload}) => {
            state.location = payload
        }
    }
})
export default baseSlice.reducer
export const {setLanguage, setMode, setLocation, setWallet} = baseSlice.actions