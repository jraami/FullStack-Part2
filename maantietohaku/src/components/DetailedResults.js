import React from 'react'

const DetailedResults = ({ entry }) => {
    <div>
        <img src={entry.flag} alt={"Flag of " + entry.name} width="15%" height="15%" /> <br />
        {entry.nativeName} is part of {entry.subregion}, has an area of {entry.area} thousand sq.km, and is home for {population} million {entry.demonym}.
    </div>
}
export default DetailedResults
