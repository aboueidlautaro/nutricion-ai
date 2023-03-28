import styled from "styled-components"

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const AboutContent = styled.div`
  width: 50%;
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
export const Cover = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  position: relative;
  filter: brightness(0.5);
`

export const CoverInfo = styled.div`
  position: absolute;
  top: 220px;
  left: 0;
  width: 100%;
  height: calc(350px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(6px);
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

export const Slogan = styled.p`
  color: var(--white);
  opacity: 0.7;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
`

export const TitleContent = styled.h3`
  font-size: 1.5rem;
  width: 100%;
`

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`

export const TextContent = styled.div`
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.5;
  margin-bottom: 20px;
`

export const Logo = styled.img`
  width: 400px;

  @media (max-width: 1024px) {
    width: 300px;
  }

  @media (max-width: 540px) {
    width: 200px;
  }

  @media (max-width: 337px) {
    width: 150px;
  }
`

export const TextSubtitle = styled.h4`
  width: 100%;
  font-weight: 600;

  &:last-child {
    margin-top: 60px;
  }
`

export const Firm = styled.img`
  width: 250px;
  margin-top: 20px;
  height: 100%;
`
