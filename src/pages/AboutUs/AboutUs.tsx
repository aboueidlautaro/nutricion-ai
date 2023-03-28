import React from "react"
import {
  AboutContainer,
  AboutContent,
  Cover,
  CoverInfo,
  Firm,
  Logo,
  Slogan,
  Subtitle,
  TextContainer,
  TextContent,
  TextSubtitle,
  Title,
  TitleContent,
} from "./style"
import cover from "@/assets/images/backgrounds/grass_background.jpg"
import logo from "@/assets/images/logos/logo.png"
import firm from "@/assets/images/utils/firma.png"

export interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
  return (
    <AboutContainer>
      <Cover src={cover} />
      <CoverInfo>
        <Title>Algunas palabras sobre</Title>
        <Subtitle>nosotros</Subtitle>
        <Slogan>
          Promovemos y difundimos la buena alimentación y vida saludable
        </Slogan>
      </CoverInfo>

      <AboutContent>
        <TextContainer>
          <TitleContent>
            Calidad de vida saludable con Nutrición Ai
          </TitleContent>
          <TextContent>
            <TextSubtitle>Misión</TextSubtitle>
            La formación de personas en las prácticas de una vida saludable
            constituye nuestra misión, tratando de llegar a la mayor cantidad de
            personas conformando grupos de divulgación de las actividades
            favorables a todo ser humano.
            <TextSubtitle>Visión</TextSubtitle>
            Transfornos en gestores del cambio, en motivadores hacia una
            sociedad respetuosa del medioambiente y de la salud actual y de
            futuras generaciones.
          </TextContent>
          <Firm src={firm} />
        </TextContainer>
        <Logo src={logo} />
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutUs
