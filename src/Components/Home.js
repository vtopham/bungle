//Only Vic changes this code

import React from "react"
import Search from "./Search"
import "../home.scss"

function Home (props) {

    const {location, setLocation, cuisineID, setCuisineID, zSearchResults, setZSearchResults} = props
    

    return(
        <>
        <div className = "home-container">
            <h1>Your #1 Bad Date-abase.</h1>
            <p>Here at Bungle, we want you to be able to plan the worst date possible. Why? We won't ask. Simply select your city and your date's least favorite cuisine to browse the worst restaurants in your area, guaranteed to ruin your evening.</p>
            <p>You might be asking yourself: why would you agree to go on a date if you're just going to sabotage it? If you're asking that question, you must have very little imagination. What if you don't want to hurt nana's feelings by insisting that her nurse just 'isn't your type'? What if you want to see how your date acts under pressure? And what about good, old fasioned revenge?</p>
            
            <Search 
                location = {location} 
                setLocation = {setLocation} 
                setCuisineID = {setCuisineID} 
                cuisineID = {cuisineID} 
                zSearchResults = {zSearchResults} 
                setZSearchResults = {setZSearchResults}/>
        </div>
        </>
    )
}

export default Home