import styled from "styled-components"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: calc(100vh - 70px);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
  max-width: 480px;
  min-width: 290px;
  width: 100%;

  @media (max-width: 337px) {
    width: 80%;
    margin: auto;
  }
`
export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`
