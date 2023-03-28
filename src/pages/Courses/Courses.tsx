import React from "react"
import { Card, CardsContainer, CoursesContainer, Title } from "./style"
import { Link } from "react-router-dom"
import { COURSES } from "@/services/utils"

export interface CoursesProps {}

const Courses: React.FC<CoursesProps> = () => {
  return (
    <CoursesContainer>
      <Title>Nuestros cursos</Title>
      <CardsContainer>
        {COURSES.map(({ id, title, bg }) => (
          <Link key={id} to={`${id}`}>
            <Card>
              <img title={title} src={bg} alt={title} />
              <div>
                <button>Ver cursos</button>
                <h2>{title}</h2>
              </div>
            </Card>
          </Link>
        ))}
      </CardsContainer>
    </CoursesContainer>
  )
}

export default Courses
