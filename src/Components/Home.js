//Only Vic changes this code

import React from "react"
import {Link} from "react-router-dom"
import Search from "./Search"

function Home (props) {

    const {location, setLocation} = props
    

    return(
        <>
        <p>This is the home page</p>
        <Search location = {location} setLocation = {setLocation}/>
        <Link to = {`/${location}`}>Go To Results</Link> {/*EXAMPLE LINK*/}
        </>
    )
}

export default Home