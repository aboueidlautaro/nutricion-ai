import { FeaturedProducts, Hero } from "@/components"
import React from "react"
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Home
