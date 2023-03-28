import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  height: auto;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px auto;
  z-index: 10;
`

export const CardsContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  padding: 100px 0px;
`

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 679px) {
    object-fit: cover;
  }
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
  width: 100%;
  object-fit: contain;
  margin: auto;
`
export const Title = styled.h3`
  color: var(--text-green);
  padding-top: 50px;
  text-align: center;
`
