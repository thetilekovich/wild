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