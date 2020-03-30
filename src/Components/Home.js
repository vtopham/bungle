//Only Vic changes this code

import React from "react"
import {Link} from "react-router-dom"
import Search from "./Search"

function Home (props) {

    const {location, setLocation, cuisineID, setCuisineID, zSearchResults, setZSearchResults} = props
    

    return(
        <>
        <p>This is the home page</p>
        <Search location = {location} setLocation = {setLocation} setCuisineID = {setCuisineID} cuisineID = {cuisineID} zSearchResults = {zSearchResults} setZSearchResults = {setZSearchResults}/>
        <Link to = {`/${location}`}>Go To Results</Link> {/*EXAMPLE LINK*/}
        </>
    )
}

export default Home