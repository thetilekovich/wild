import { IWalletConst } from "@/types/app"
import rus from '@/public/icons/russia.png'
import kgz from '@/public/icons/kyrgyzstan.png'
import byn from '@/public/icons/belarus.png'
import amd from '@/public/icons/armenia.png'
import uzs from '@/public/icons/uzbekistan.png'
import kzt from '@/public/icons/kazakhstan.png'
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