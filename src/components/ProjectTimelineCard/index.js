// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-card-container">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="title-container">
        <h1>{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} target="__blank" className="hyper-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
