import { setWallet } from "../slices/baseSlice"
import { Dispatch } from "@reduxjs/toolkit"
import { IWalletConst } from "@/types/app"

const changeWallet = (wallet: IWalletConst) => {
    return (dispatch: Dispatch) => {
        dispatch(setWallet(wallet))
    }
}


export default changeWallet