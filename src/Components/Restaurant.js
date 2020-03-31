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

    return(
        <>
        <div className = "restaurant-container">
            <h1>Restaurant Name</h1>
            <div>
                <span className = "rating">
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