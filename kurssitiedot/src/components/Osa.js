import React from 'react'

const Osa = ({part}) => {
  return (
    <div>
      <p>{part.name}, {part.assignments} tehtävää.</p>
    </div>
  )
}

export default Osa