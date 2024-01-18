// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails
  return (
    <div className="course-card-container">
      <div className="course-heading-container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle />
          <p className="course-duration-para">{duration}</p>
        </div>
      </div>
      <p className="course-desc">{description}</p>
      <ul className="taglist-container">
        {tagsList.map(each => (
          <li className="tag-item" key={each.id}>
            <p> {each.name} </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
