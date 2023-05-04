'use client';

import HomePopulars from "@/components/HomePopulars";
import HomeWellcome from "@/components/HomeWellcome";



export default function Home() {
  return (
    <section className="">
      <HomeWellcome/>
      <HomePopulars/>
    </section>
  )
}
