//Only Anthony changes this code
import React from "react"
import {useParams, useRouteMatch, Link} from "react-router-dom"


function Results (props) {


    const {location, setLocation, restaurantID, setRestaurantID} = props

    const {path, url} = useRouteMatch();

    return(
        <>
        <p>This is the results page</p>
        <Link to = {`${url}/${restaurantID}`}>Link to restaurant page</Link>
        </>
    )
}

export default Results