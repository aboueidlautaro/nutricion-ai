import styled from "styled-components"

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 100px 0;
  gap: 80px;
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

export const Card = styled.div`
  width: 280px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  box-shadow: 0 3px 12px var(--shadow);
  position: relative;
  overflow: hidden;

  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 3px 30px var(--shadow-dark);
  }

  &:hover img {
    scale: 1.028;
  }

  & img {
    transition: all 0.7s ease-in-out;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4);
  }

  & div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & button {
      padding: 5px 40px;
      border-radius: 10px;
      border: none;
      background-color: var(--white);
      font-size: 1rem;
      font-weight: 600;
      color: var(--text);
      transition: all 0.4s ease-in-out;
      text-decoration: none;
      text-align: center;
      border: 2px solid transparent;

      &:hover {
        cursor: pointer;
        background-color: transparent;
        color: var(--white);
        border: 2px solid var(--white);
      }
    }

    & h2 {
      font-size: 1.8rem;
      letter-spacing: 0.5px;
      font-weight: 500;
      color: var(--white);
      width: 90%;
      text-align: center;
    }
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  text-align: center;
  text-transform: uppercase;
`
