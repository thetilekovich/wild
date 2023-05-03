'use client'

import { productCatalogs } from "@/public/data/productCatalogsData"
import { IProductCatalogData, IProductCatalogDropdown } from "@/types/product"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ProductCatalogDropdown = ({ catalogShow }: { catalogShow: boolean }) => {
    const [showedCatalogItem, setShowedCatalogItem] = useState('-1')
    return (
        <div className='relative mt-5 '>
            <div className="bg-white h-screen overflow-scroll min-w-max rounded-md absolute z-10 py-7 px-10">
                {
                    productCatalogs.map(item => (
                        <Link
                        key={item.id}
                            href={`/catalog/${item.id}`}
                            onMouseMove={() => setShowedCatalogItem(item.id)}
                            className={`${item.id === showedCatalogItem ? 'bg-blue-600 text-white' : ""} py-2 px-4 flex items-center duration-300 rounded-md font-bold cursor-pointer`}>
                            <Image src={item.icon} width={20} height={20} alt='' />
                            <p className="ml-3">{item.title}</p>
                        </Link>
                    ))
                }
            </div>
            <div className={catalogShow ? 'block' : 'hidden'}>
                {
                    productCatalogs.map(item => item.id == showedCatalogItem ?
                        item.dropdown ?
                            <div key={item.id} className={`${item.id == showedCatalogItem ? 'translate-x-[250px]' : 'translate-x-0'} h-screen overflow-scroll  duration-700 absolute rounded-md bg-white min-w-max py-7 px-10`}>
                                {
                                    item.dropdown.map(subitem => (
                                        <ProductCatalogItem key={subitem.id} item={item} subitem={subitem} />
                                    ))
                                }
                            </div>
                            : null : null)
                }
            </div>
        </div >
    )
}

const ProductCatalogItem = ({ subitem , item}: { subitem: IProductCatalogDropdown, item: IProductCatalogData }) => {
    const [hover, setHover] = useState(false)
    return (
        <Link
        href={`/catalog/${item.id}/${subitem.id}`}
            onMouseMove={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="py-2 px-4 rounded-md flex justify-between  font-bold text-gray-500 hover:text-blue-600">
            <p >{subitem.title}</p>
            <span className="w-5">
                {
                    hover ? <p>➤</p> : null
                }
            </span>
        </Link>
    )
}




export default ProductCatalogDropdown