import { StaticImageData } from "next/image"
import sale from '@/public/images/Group 1.png'


export interface IHomeWelcomeLinks {
    id: number,
    title: string,
    image: StaticImageData,
    url: string
}


export const homeWelcomeLinks: IHomeWelcomeLinks[] = [
    {
        id: 0,
        title: 'Скидки недели',
        image: sale,
        url: ''
    },{
        id: 1,
        title: 'Все со скидками',
        image: sale,
        url: ''
    },{
        id: 2,
        title: 'Книги за 1 рубль',
        image: sale,
        url: ''
    },{
        id: 3,
        title: 'Акции',
        image: sale,
        url: ''
    },{
        id: 4,
        title: 'Дом и сад',
        image: sale,
        url: ''
    },{
        id: 5,
        title: 'Электроника',
        image: sale,
        url: ''
    },{
        id: 6,
        title: 'Одежда и обувь',
        image: sale,
        url: ''
    },{
        id: 7,
        title: 'Бытовая химия',
        image: sale,
        url: ''
    },{
        id: 8,
        title: 'Красота и здоровье',
        image: sale,
        url: ''
    },{
        id: 12,
        title: 'Стать продавцом',
        image: sale,
        url: ''
    }
]