//Only Vic changes this code

import React from "react"
import {Link} from "react-router-dom"

function Home (props) {

    const {location, setLocation} = props
    

    return(
        <>
        <p>This is the home page</p>
        <Link to = {`/${location}`}>Go To Results</Link>
        </>
    )
}

export default Home