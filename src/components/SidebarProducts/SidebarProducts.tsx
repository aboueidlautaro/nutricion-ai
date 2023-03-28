import React, { Fragment } from "react"
import {
  SidebarContainer,
  SidebarItem,
  SidebarList,
  SidebarTitle,
} from "./style"
import { CATEGORIES } from "@/services/utils"
import { useAppDispatch, useAppSelector } from "@/store"
import { setChanged } from "@/store/features/categorySlice"

export interface SidebarProductsProps {}

const SidebarProducts: React.FC<SidebarProductsProps> = () => {
  const subcategory = window.localStorage.getItem("subcategory") || "all"

  const dispatch = useAppDispatch()

  const changed = useAppSelector((state) => state.category.changed)

  const setNewCategory = (value: boolean) => {
    dispatch(setChanged(value))
  }

  const setCategory = (id: string) => {
    console.log(id)
    if (id === subcategory) {
      window.localStorage.removeItem("subcategory")
      setNewCategory(!changed)
    } else {
      window.localStorage.setItem("subcategory", id)
      setNewCategory(!changed)
    }
  }

  return (
    <SidebarContainer>
      <SidebarTitle>FILTROS</SidebarTitle>

      {CATEGORIES.map(({ id, title, subcategories }) => {
        return (
          <Fragment key={id}>
            <SidebarItem>{title}</SidebarItem>
            <SidebarList>
              {subcategories.map(({ title, id }) => (
                <SidebarItem key={id} onClick={() => setCategory(id)}>
                  {title}
                </SidebarItem>
              ))}
            </SidebarList>
          </Fragment>
        )
      })}
    </SidebarContainer>
  )
}

export default SidebarProducts
