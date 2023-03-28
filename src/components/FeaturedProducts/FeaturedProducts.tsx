import React from "react"
import {
  Card,
  CardsContainer,
  Container,
  FeaturedProductsTitle,
  Image,
  Products,
  Title,
} from "./style"
import product1 from "@/assets/images/utils/frutos-secos.png"
import product2 from "@/assets/images/utils/sin-gluten.png"
import product3 from "@/assets/images/utils/bajo-sodio.png"

export interface FeaturedProductsProps {}

const FeaturedProducts: React.FC<FeaturedProductsProps> = () => {
  const PRODUCTS = [
    {
      title: "Frutos secos",
      image: product1,
    },
    {
      title: "Sin gluten",
      image: product2,
    },
    {
      title: "Bajos en sodio",
      image: product3,
    },
  ]

  return (
    <Container>
      <FeaturedProductsTitle>
        Tu cuerpo es tu templo, cuídalo con una alimentación saludable a través
        de nuestros productos
      </FeaturedProductsTitle>
      <Products>
        <CardsContainer>
          {PRODUCTS.map(({ title, image }) => (
            <Card key={title}>
              <Title>{title}</Title>
              <Image title={title} src={image}></Image>
            </Card>
          ))}
        </CardsContainer>
      </Products>
    </Container>
  )
}

export default FeaturedProducts
