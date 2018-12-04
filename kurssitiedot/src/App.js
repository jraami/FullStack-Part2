import React from 'react'
import Kurssi from './components/Kurssi'

const App = ({ courses }) => {
  return (
    <div>
            {courses.map(course =>
        <Kurssi key={course.id} course={course} />
      )}<br />
    </div>
  )
}

export default App
