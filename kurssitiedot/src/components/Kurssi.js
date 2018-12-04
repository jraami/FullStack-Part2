import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'

const Kurssi = ({course}) => {
    return (
        <div>
            <Otsikko heading={course.name} />
            <Sisalto course={course}/>
        </div>
    )
}

export default Kurssi
