import React, { useEffect } from "react"
import {
  Banner,
  Card,
  ProductsBanner,
  ProductsContainer,
  ProductsContent,
  ProductsList,
  RenderError,
  Subtitle,
  Title,
} from "./style"
import banner from "@/assets/images/backgrounds/products_background.jpg"
import { SidebarProducts } from "@/components"
import { PRODUCTS } from "@/services/utils"
import { useAppSelector } from "@/store"

export interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const subcategoryStorage = window.localStorage.getItem("subcategory") || "all"

  const changedValue = useAppSelector((state) => state.category.changed)

  let filteredProducts = PRODUCTS.filter(
    ({ subcategory }) =>
      subcategory === subcategoryStorage || subcategoryStorage === "all"
  )

  useEffect(() => {}, [changedValue])

  return (
    <ProductsContainer>
      <Banner src={banner} />
      <ProductsBanner>
        <Title>ESTOS SON</Title>
        <Subtitle>TODOS NUESTROS PRODUCTOS</Subtitle>
      </ProductsBanner>
      <ProductsContent>
        <SidebarProducts />
        <ProductsList>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(({ id, title, image }) => (
              <Card key={id}>
                <img title={title} src={image} alt={title} />
                <h2>{title}</h2>
              </Card>
            ))
          ) : (
            <RenderError key={"error"}>
              No hay productos para la categoría seleccionada
            </RenderError>
          )}
        </ProductsList>
      </ProductsContent>
    </ProductsContainer>
  )
}

export default Products
