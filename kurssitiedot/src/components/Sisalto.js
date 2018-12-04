import React from 'react'
import Osa from './Osa'

const TotalAssignments = ({parts}) => {
  const total = (accumulator, current) => accumulator + current.assignments
  console.log(parts)
  return (
    <div>
            Yhteensä {parts.reduce(total, 0)} tehtävää.
    </div>
  )
}

const Sisalto = ({ course }) => {
  return (
    <div>
      {course.parts.map(part =>
        <Osa key={part.id} part={part} />
      )}<br />
      <TotalAssignments parts={course.parts}/>
    </div>
  )
}

export default Sisalto