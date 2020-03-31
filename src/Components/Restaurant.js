//Only Vic changes this code

import React, {useEffect, useState} from "react"
import "../restaurant.scss"
import { GoStar } from "react-icons/go";
import {Link} from "react-router-dom"
import axios from "axios"

function Review (props) { //review component
    const {numOfStars, reviewer, reviewText} = props
    const stars = [];

    for (let i = 0; i < numOfStars; i++) {
        stars.push(1);
    }
   
    return(
        <div className = "full-review">
        <p className = "quote">{reviewText}</p>
        <span className = "rating">
            {stars.map( _ => <GoStar/>)}
            <span className = "reviewer">-{reviewer}</span>
        </span>
        </div>
    )
}


function Restaurant (props) {
    const {restaurantID} = props
    const [restData, setRestData] = useState({
        name: "",
        aggregateRating: "",
        ratingText: "",
    });
    


    const header = { //header for the axios request
        method: 'GET',
        headers: {
            'user-key': '392a6e06ccc0d5d88a95d732a6bfc55d',
            'Content-type': 'application.json',
        },
        credentials: 'same-origin'
    }

    useEffect(() => {
        axios.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantID}`, header)
        .then((response) => {
            console.log(response.data)
            setRestData({
                name: response.data.name,
                aggregateRating: response.data.user_rating.aggregateRating,
                ratingText: response.data.user_rating.rating_text,
                address: response.data.location.address
            })
        })
    },[])


    return(
        <>
        <div className = "restaurant-container">
            <h1>{restData.name}</h1>
            <div>
                {restData.ratingText === "Not rated" ? <p>Not yet rated</p> : <span className = "rating">
                    <GoStar />  {/*NEED TO HAVE THIS GENERATE THE RIGHT NUMBER OF STARS*/}
                    <GoStar />
                </span>}
            </div>
            <div className = "restaurant-address">
                <div>
                    <p>{restData.address}</p> {/*NEED TO HAVE THIS SPLIT INTO TWO LINES*/}
                </div>
                <button>Google Maps</button>
            </div>
            <div className = "restaurant-reviews">
                <Review numOfStars = {2} reviewer = {`Victoria`} reviewText = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque nibh et nunc finibus pellentesque. Sed tempus lectus vitae porttitor commodo. Nam pulvinar ante in volutpat eleifend. Mauris vitae ligula dolor. Nullam feugiat cursus ligula, nec consequat massa tempor vitae.`}/>
                <Review numOfStars = {3} reviewer = {`Victoria`} reviewText = {`Aenean id accumsan ante, nec tempus lorem. Maecenas vitae nibh at metus euismod varius sagittis non orci. Quisque facilisis nec lorem in vulputate. Sed viverra orci sed velit mollis vestibulum. In mollis mattis nunc, non convallis eros venenatis quis. Quisque auctor erat nec tincidunt semper. Etiam sed sagittis sem, id convallis quam. Nam feugiat, augue id sagittis accumsan, est justo lobortis augue, sit amet pulvinar purus tellus quis turpis. `}/>
                <Review numOfStars = {2} reviewer = {`Victoria`} reviewText = {`Donec sed dictum justo. Vivamus feugiat faucibus ipsum non fermentum. Cras eu efficitur enim, a elementum nisi. Sed interdum tellus sed ex pretium dictum. Integer metus mauris, viverra vel lectus in, hendrerit aliquam arcu. Pellentesque sodales nulla eu urna vestibulum, ac mattis ligula tempus.`}/>
            </div>
            <div className = "go-back-home">
                <Link to = "/#search">
                    <button>Back To Search</button>
                </Link>
            </div>

        </div>

        </>
    )
}

export default Restaurant