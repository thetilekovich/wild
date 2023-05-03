import React, { useState } from 'react'
import ProductCatalogDropdown from '../DropDowns/ProductCatalogDropdown'

const ProductCatalogs = () => {
    const [catalogsShow, setCatalogsShow] = useState(false)
    return (
        <div>
            <div className={`${catalogsShow ? 'block opacity-70 absolute top-0 bottom-0 left-0 right-0 bg-gray-300' : 'hidden'}`}></div>
            <button
                onClick={() => setCatalogsShow(prev => !prev)}
                className='bg-blue-600 relative flex items-center text-white font-bold px-3 rounded-md text-lg' >
                <div className={`product_catalogs_btn mx-2 ${catalogsShow ? 'catalogs_show_active' : ''}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p className='py-2'>Каталог</p>
            </button>
            <div className={`${catalogsShow ? 'translate-0' : '-translate-x-[500px]'} duration-500`}>
                <ProductCatalogDropdown catalogShow={catalogsShow}/>
            </div>
        </div>
    )
}

export default ProductCatalogs