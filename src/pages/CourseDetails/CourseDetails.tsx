import React from "react"
import { useParams } from "react-router-dom"
import {
  Card,
  DetailsContainer,
  RenderError,
  RenderVideo,
  Video,
} from "./style"
import ReactPlayer from "react-player/lazy"
import { COURSES_DETAILS } from "@/services/utils"

export interface CourseDetailsProps {}

const CourseDetails: React.FC<CourseDetailsProps> = () => {
  const { id } = useParams()

  let filteredCourses = COURSES_DETAILS.filter(
    ({ course_id }) => course_id?.toString() === id
  )

  let courseVideo: string | undefined | null

  return (
    <>
      <DetailsContainer>
        {filteredCourses.length > 0 ? (
          filteredCourses.map(({ course_id, title, bg, price, video }) => {
            courseVideo = video
            return (
              <Card bg={bg} key={title}>
                <h2>{title}</h2>
                <span>{price}</span>
                <button>Comprar</button>
              </Card>
            )
          })
        ) : (
          <RenderError>No existe el curso indicado!</RenderError>
        )}
      </DetailsContainer>
      <RenderVideo>{courseVideo && <Video src={courseVideo} />}</RenderVideo>
    </>
  )
}

export default CourseDetails
