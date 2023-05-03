"use client"

import LayoutComponent from "@/components/LayoutComponent"
import { useAppSelector } from "@/store/hooks"

const FavoritesPage = () => {
    const { location } = useAppSelector(s => s.base)
    return (
        <div>
            <LayoutComponent>
                {location.city}
            </LayoutComponent>
        </div>
    )
}

export default FavoritesPage