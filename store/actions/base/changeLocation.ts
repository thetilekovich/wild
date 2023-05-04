import { setLocation } from "../../slices/baseSlice"
import { Dispatch } from "@reduxjs/toolkit"

const changeLocation = (location: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setLocation(location))
    }
}


export default changeLocation