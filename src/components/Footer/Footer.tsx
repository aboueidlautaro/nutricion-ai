import React from "react"
import {
  Author,
  ContactItem,
  ContactList,
  Copyrigth,
  FooterContainer,
  FooterContent,
  FooterTitle,
} from "./style"
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const CONTACT_LINKS = [
    {
      title: "Instagram",
      href: "https://instagram.com/",
    },
    {
      title: "Facebook",
      href: "https://facebook.com/",
    },
    {
      title: "+54 (3704) 412 1314",
      href: "tel:+543704121314",
    },
    {
      title: "nutricion.ai@gmail.com",
      href: "mailto:nutricion.ai@gmail.com",
    },
  ]

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>Contactanos</FooterTitle>
        <ContactList>
          {CONTACT_LINKS.map(({ title, href }) => (
            <ContactItem href={href} key={title}>
              {title}
            </ContactItem>
          ))}
        </ContactList>
        <Copyrigth>
          Desarrollado por
          <Author>Lautaro Aboueid</Author>
        </Copyrigth>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
