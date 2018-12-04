import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const courses = 
    [
        {
            name: 'Half Stack -sovelluskehitys',
            id: 0,
            parts: [
                {
                    name: 'Reactin perusteet',
                    assignments: 10,
                    id: 1
                },
                {
                    name: 'Tiedonvälitys propseilla',
                    assignments: 7,
                    id: 2
                },
                {
                    name: 'Sosiaalisia kokeita avaruuskommunismin parissa',
                    assignments: 69,
                    id: 3
                }, {
                    name: 'Komponenttien tila',
                    assignments: 14,
                    id: 4
                }
            ]
        },
        {
            name: 'Kurssi 2',
            id: 1,
            parts: [
                {
                    name: 'Reactin jatko',
                    assignments: 15,
                    id: 1
                },
                {
                    name: 'Tiedonvälitys ilman proppuja',
                    assignments: 2,
                    id: 2
                },
                {
                    name: 'Edistynyt filosofia',
                    assignments: 9,
                    id: 3
                }, {
                    name: 'Komponenttien tila ja avaruus',
                    assignments: 24,
                    id: 4
                }
            ]
        }
    ]



ReactDOM.render(
    <App courses={courses} />,
    document.getElementById('root')
)
