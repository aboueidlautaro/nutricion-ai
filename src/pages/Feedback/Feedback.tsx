import React from "react"
import { FEEDBACK } from "@/services/utils"

import {
  Container,
  FeedbackAuthor,
  FeedbackCard,
  FeedbackContainer,
  FeedbackContent,
  FeedbackDate,
  FeedbackDescription,
  FeedbackTitle,
  Icon,
  TextContainer,
  Title,
} from "./style"
import doubleQuotes from "@/assets/images/utils/comillas.svg"

export interface FeedbackProps {}

const Feedback: React.FC<FeedbackProps> = () => {
  return (
    <FeedbackContainer>
      <Title>Opinión de nuestros clientes</Title>
      <FeedbackContent>
        {FEEDBACK.map(({ id, title, description, author, date }) => (
          <FeedbackCard key={id}>
            <Container gap='20px'>
              <Icon title={title} src={doubleQuotes} />
              <TextContainer>
                <FeedbackTitle>{title}</FeedbackTitle>
                <FeedbackDescription>{description}</FeedbackDescription>
              </TextContainer>
            </Container>
            <Container justify='flex-end'>
              <FeedbackAuthor>{author}</FeedbackAuthor>
              <FeedbackDate>{date}</FeedbackDate>
            </Container>
          </FeedbackCard>
        ))}
      </FeedbackContent>
    </FeedbackContainer>
  )
}

export default Feedback
