import React from "react"
import {
  CoursesButton,
  HeaderContainer,
  HeaderContent,
  Logo,
  NavItem,
  NavList,
  Navbar,
  Search,
} from "./style"
import logo from "@/assets/images/logos/logo_texto.svg"
import { NavLink, useNavigate } from "react-router-dom"

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate("/")
  }

  const NAV_ROUTES = [
    { path: "/about-us", name: "Nosotros" },
    { path: "/products", name: "Productos" },
    { path: "/contact", name: "Contacto" },
    { path: "/feedback", name: "Opiniones" },
  ]

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={goHome} src={logo} />
        <Search placeholder='Buscar' />
        <Navbar>
          <NavList>
            {NAV_ROUTES.map(({ path, name }) => (
              <NavItem key={path}>
                <NavLink to={path}>{name}</NavLink>
              </NavItem>
            ))}
            <CoursesButton to='/courses'>Cursos</CoursesButton>
          </NavList>
        </Navbar>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
