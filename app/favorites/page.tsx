"use client"

import Deploying from "@/components/Deploying"
import LayoutComponent from "@/components/LayoutComponent"
import { useAppSelector } from "@/store/hooks"

const FavoritesPage = () => {
    const { location } = useAppSelector(s => s.base)
    return (
       <Deploying/>
    )
}

export default FavoritesPage