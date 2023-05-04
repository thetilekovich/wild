import { setLanguage } from "../../slices/baseSlice"
import { Dispatch } from "@reduxjs/toolkit"

const changeLanguage = (lang: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setLanguage(lang))
    }
}


export default changeLanguage