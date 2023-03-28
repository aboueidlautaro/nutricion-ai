import styled from "styled-components"

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 20px;
  border-radius: 10px;
  width: auto;
  min-width: 290px;
  box-shadow: 0 3px 6px var(--shadow);
`

export const SidebarTitle = styled.h2`
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
  text-transform: uppercase;
`

export const SidebarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & li {
    color: var(--text-light);
    font-weight: 400;
    cursor: pointer;
    margin-left: 15px;

    &::before {
      content: "- ";
    }
    &:hover {
      color: var(--primary);
      font-weight: 500;
    }
  }
`

export const SidebarItem = styled.li`
  color: var(--text);
  font-weight: 500;
  list-style: none;
`
