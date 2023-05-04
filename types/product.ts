import { StaticImageData } from "next/image";

export interface IProductCatalogData {
    id: string,
    title: string,
    url: string,
    icon : StaticImageData,
    dropdown?: IProductCatalogDropdown[]
}
export interface  IProductCatalogDropdown {
    id: string,
    title: string,
    url: string,
}


export interface IProduct {
    id: number,
    title: string,
    description: string,
    images: StaticImageData[],
    sellerId: number,
    price: number,
    discount: number,
    popularity: number,
    feedbacks: [],
    questions: [],
    categoryId: number,
    subcategoryId: number,
    inStock: number,
}