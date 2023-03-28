import { Footer, Header } from "@/components"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Main } from "./style"
import {
  AboutUs,
  Contact,
  CourseDetails,
  Courses,
  Feedback,
  Home,
  NotFound,
  Products,
} from "@/pages"
export interface AppRoutesProps {}

const AppRoutes: React.FC<AppRoutesProps> = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/products' element={<Products />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<CourseDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default AppRoutes
