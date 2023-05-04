import { setMode } from "../../slices/baseSlice"
import { Dispatch } from "@reduxjs/toolkit"

const changeUIMode = (mode: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setMode(mode))
    }
}


export default changeUIMode