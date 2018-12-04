import React from 'react'

const ListEntry = ({ entry }) => {

    var area = (entry.area / 1000).toFixed(0) + " thousand sq.km"
    if ((entry.area / 1000).toFixed(0) == 0) {
        area = entry.area.toFixed(0) + " sq.km"
    }

    return (
        <div>
            <li>
                <b>{entry.name}</b><br />
                <img src={entry.flag} alt={"Flag of " + entry.name} width="15%" height="15%" border="1px" /><br />
                {entry.nativeName} is part of {entry.subregion}, has an area of {area}, and is home for {entry.population} {entry.demonym} people.
            </li>
            <br />
        </div>
    )
}

export default ListEntry