import styled from "styled-components"
import background from "@/assets/images/backgrounds/background_bar.png"

export const Container = styled.div`
  width: 100%;
  text-align: center;
`
export const FeaturedProductsTitle = styled.h2`
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text-light);
  max-width: 550px;
  text-align: center;
  margin: 100px auto;
`

export const Products = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${background});
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const CardsContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`
export const Card = styled.div`
  width: 250px;
  height: 300px;
  background-color: var(--card);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  gap: 20px;
`

export const Image = styled.img`
  width: 140%;
  object-fit: contain;
`
export const Title = styled.h3`
  color: var(--text-green);
  padding-top: 50px;
  text-align: center;
`
