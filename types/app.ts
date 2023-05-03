import { StaticImageData } from "next/image"

export interface IBaseSlice {
    lang: string,
    UIMode: string,
    wallet: IWalletConst,
    location: {
        country: string,
        city: string,
        street: string,
        postCode: string,
        homeNumber: string,
        flatNumber: string | null,
        coordinate: string
    }
}

export interface IWalletConst{
    id: string,
    title: string,
    icon: StaticImageData
}
