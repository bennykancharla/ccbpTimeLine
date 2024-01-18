// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const categoryConstants = {
  course: 'COURSE',
  project: 'PROJECT',
}

const TimelineView = props => {
  const {timelineItemsList} = props
  const getTimelineItems = data => {
    if (data.categoryId === categoryConstants.course) {
      return <CourseTimelineCard key={data.id} courseDetails={data} />
    }
    return <ProjectTimelineCard key={data.id} projectDetails={data} />
  }

  const items = timelineItemsList.map(eachItem => ({title: eachItem.title}))

  return (
    <div className="main-bg">
      <h1 className="main-heading-1">MY JOURNEY OF CCBP 4.0</h1>

      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={items}>
          {timelineItemsList.map(eachItem => getTimelineItems(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
