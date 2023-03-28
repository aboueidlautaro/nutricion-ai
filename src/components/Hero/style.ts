import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeroContainer = styled.section`
  width: 100%;
  height: 100%;

  margin: auto;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 220px);
  gap: 80px;

  @media (min-width: 540px) {
    min-height: calc(100vh - 140px);
  }

  @media (min-width: 1024px) {
    min-height: calc(100vh - 70px);
  }
`
export const HeroTitle = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  text-align: center;
  text-transform: uppercase;
  width: 75%;
  padding-top: 100px;

  @media (min-width: 337px) and (max-width: 767px) {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

export const ProductsAd = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  bottom: -60px;

  @media (max-width: 679px) {
    bottom: -100px;
    width: 150%;
  }
`

export const DirectLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  padding: 15px 30px;
  border-radius: 50px;
  background-color: var(--secondary);
  border: 5px solid var(--white);
  position: absolute;
  top: -80px;
  color: var(--white);
  transition: all 0.4s ease-in-out;
  z-index: 1;

  &:hover {
    background-color: var(--secondary-dark);
  }

  &:visited {
    color: var(--white);
  }
`
export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  height: 50%;
  bottom: 50px;

  @media (min-width: 680px) {
    width: 60%;
  }
`

export const Background = styled.img`
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`

export const Products = styled.img`
  position: absolute;
  width: 50%;
  bottom: -25px;
  left: 0;
  right: 0;
  margin: auto;
`
