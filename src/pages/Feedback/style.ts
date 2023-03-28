import styled from "styled-components"

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: auto;
  min-height: calc(100vh - 250px);
  margin: 80px auto;
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

export const FeedbackContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: auto;
`
export const FeedbackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--white);
  box-shadow: 0 3px 6px var(--shadow);
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  color: var(--text);
  gap: 20px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || "6px"};
  width: 100%;
  justify-content: ${({ justify }) => justify || null};
`

export const TextContainer = styled.div``

export const FeedbackTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  display: inline;
`

export const FeedbackDescription = styled.p`
  font-size: 0.9rem;
  display: inline;
  margin-left: 6px;
`

export const Icon = styled.img`
  width: 40px;
  height: 100%;
  object-fit: contain;
`

export const FeedbackAuthor = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
`
export const FeedbackDate = styled.span`
  font-size: 0.8rem;
`
