import styled from "styled-components"

interface Props {
  bg: string
}

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  height: auto;
  padding: 100px 0;
  gap: 80px;
`

export const RenderError = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
  text-transform: uppercase;
`
export const Card = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url(${(props: Props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 300px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  color: var(--white);
  padding: 0 20px;
  text-align: center;

  & h2 {
    font-weight: 800;
    letter-spacing: 0.5px;
    font-size: 1.1rem;
  }
  & span {
    font-weight: 500;
    letter-spacing: 0.5px;
    font-size: 2rem;
  }

  & button {
    background-color: var(--primary);
    border: none;
    color: var(--white);
    font-weight: 600;
    cursor: pointer;
    padding: 5px 20px;
    border-radius: 6px;
  }
`

export const RenderVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Video = styled.iframe`
  width: 540px;
  height: 300px;
  object-fit: contain;
  border: none;
  border-radius: 10px;
`
