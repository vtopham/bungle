//Only Vic changes this code

import React from "react"
import "../restaurant.scss"
import { GoStar } from "react-icons/go";
import {Link} from "react-router-dom"

function Review (props) {
    const {numOfStars, reviewer, reviewText} = props
    const stars = [];

    for (let i = 0; i < numOfStars; i++) {
        stars.push(1);
        console.log(stars);
    }
   
    return(
        <>
        <p className = "quote">{reviewText}</p>
        <p className = "reviewer">-{reviewer}</p>
        <span>
            {stars.map( _ => <GoStar/>)}
        </span>
        </>
    )
}
function Restaurant (props) {

    return(
        <>
        <div className = "restaurant-container">
            <h1>Restaurant Name</h1>
            <div className="rating">
                <span>Restaurant Rating</span>
                <span>
                    <GoStar />
                    <GoStar />
                </span>
            </div>
            <div className = "restaurant-address">
                <div>
                    <p>111 market street</p>
                    <p>San Francisco, CA</p>
                </div>
                <button>Google Maps</button>
            </div>
            <div className = "restaurant-reviews">
                <Review numOfStars = {2} reviewer = {`Victoria`} reviewText = {`Worst place I've ever eaten`}/>
                <Review numOfStars = {2} reviewer = {`Victoria`} reviewText = {`Worst place I've ever eaten`}/>
                <Review numOfStars = {2} reviewer = {`Victoria`} reviewText = {`Worst place I've ever eaten`}/>
            </div>
            <div className = "go-back-home">
                <Link to = "/#search">
                    <button>Try Again</button>
                </Link>
            </div>

        </div>

        </>
    )
}

export default Restaurant