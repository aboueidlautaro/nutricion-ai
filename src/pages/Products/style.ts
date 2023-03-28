import styled from "styled-components"

export const ProductsContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
`
export const Banner = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  position: relative;
  filter: brightness(0.5);
`

export const ProductsBanner = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(4px);
  position: absolute;
  top: 220px;
  left: 0;
  text-transform: uppercase;

  @media (min-width: 337px) {
    top: 180px;
  }

  @media (min-width: 540px) {
    top: 140px;
  }

  @media (min-width: 1024px) {
    top: 70px;
  }
`

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-beige);
  text-align: center;
`

export const Subtitle = styled.h2`
  color: var(--white);
  font-size: 2.3rem;
  text-align: center;
`

export const ProductsContent = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 100px auto;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const ProductsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const RenderError = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
  text-transform: uppercase;
`

export const Card = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 6px var(--shadow);
  transition: all 0.4s ease-in-out;

  & img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  & h2 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
    text-align: center;
    line-height: 3rem;
  }

  &:hover {
    box-shadow: 0 3px 30px var(--shadow-dark);
    cursor: pointer;
  }
`
