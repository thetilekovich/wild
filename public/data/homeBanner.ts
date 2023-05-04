import image1 from '@/public/images/1000x300.png'
import { StaticImageData } from 'next/image'

export interface IHomeBanner {
    id: number,
    image: StaticImageData,
    url :string
}



export const homeBanner: IHomeBanner[] = [
    {
        id: 1,
        image: image1,
        url: '/product/'
    },
    {
        id: 2,
        image: image1,
        url: '/product/'
    },
    {
        id: 3,
        image: image1,
        url: '/product/'
    },
    
]