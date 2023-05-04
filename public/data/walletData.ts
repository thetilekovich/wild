import { IWalletConst } from "@/types/app"
import rus from '@/public/icons/Flags/russia.png'
import kgz from '@/public/icons/Flags/kyrgyzstan.png'
import byn from '@/public/icons/Flags/belarus.png'
import amd from '@/public/icons/Flags/armenia.png'
import uzs from '@/public/icons/Flags/uzbekistan.png'
import kzt from '@/public/icons/Flags/kazakhstan.png'


export const WalletConsts: IWalletConst[] = [
    {
        id: 'RUB',
        title: "Российский рубль",
        icon: rus
    },
    {
        id: 'KGZ',
        title: "Кыргызский сом",
        icon: kgz
    },
    {
        id: 'BYN',
        title: "Белларусский рубль",
        icon: byn
    },
    {
        id: 'AMD',
        title: "Армянский драм",
        icon: amd
    },
    {
        id: 'UZS',
        title: "Узбекский сум",
        icon: uzs
    },
    {
        id: 'KZT',
        title: "Казахстанский тенге",
        icon: kzt
    },
]