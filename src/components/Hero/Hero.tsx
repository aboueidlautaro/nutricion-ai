import React from "react"
import {
  Background,
  Container,
  DirectLink,
  HeroContainer,
  HeroContent,
  HeroTitle,
  Products,
  ProductsAd,
} from "./style"
import bg from "@/assets/images/backgrounds/banner_round_bg.png"
import product from "@/assets/images/utils/food.png"

export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          Más de 20 años dedicados a promover y difundir la buena alimentación y
          la vida saludable
        </HeroTitle>
        <ProductsAd>
          <DirectLink to='/products'>Productos</DirectLink>
          <Container>
            <Background src={bg} />
            <Products src={product} />
          </Container>
        </ProductsAd>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
