import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.header`
  margin: auto;
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--white);

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 10px;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1400px;
  height: 100%;
  width: 80%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 10px;
  }
`
export const Logo = styled.img`
  width: auto;
  height: 45px;
  cursor: pointer;
`

export const Search = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 6px;
  border: none;
  padding: 0px 12px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);

  &::placeholder {
    text-align: center;
    color: var(--text-light);
    font-weight: 600;
  }
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  gap: 15px;
  font-weight: 500;

  @media (max-width: 540px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`
export const NavItem = styled.li``

export const CoursesButton = styled(Link)`
  padding: 6px 12px;
  background-color: var(--primary);
  color: var(--white);
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;

  &:visited {
    color: var(--white);
  }
`
