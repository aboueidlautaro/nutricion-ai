import styled from "styled-components"

export const FooterContainer = styled.footer`
  width: 100%;
  height: 250px;
`

export const FooterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const FooterTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
`
export const ContactList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
`
export const ContactItem = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: var(--text);
  cursor: pointer;
`
export const Copyrigth = styled.p`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 400;
  color: var(--text);
`

export const Author = styled.span`
  font-size: 15px;
  font-weight: 700;
  margin-left: 5px;
`
