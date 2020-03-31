//Only Vic changes this code

import React, {useEffect, useState} from "react"
import "../restaurant.scss"
import { GoStar } from "react-icons/go";
import {Link} from "react-router-dom"
import axios from "axios"
import Sentiment from "sentiment"



function Review(props) {
    const {thisReview} = props

    return(
        <div className = "full-review">
           <p className = "quote">{thisReview.review}</p> 
           <p className = "reviewer">-{thisReview.user}</p>
        </div>

    )
}


function Restaurant (props) {
    const {restaurantID} = props

    //set some state for the stuff i'm grabbing
    const [restData, setRestData] = useState({
        name: "",
        aggregateRating: "",
        ratingText: "",
    });

    const [reviews, setReviews] = useState([]);
    

    const header = { //header for the axios request
        method: 'GET',
        headers: {
            'user-key': '392a6e06ccc0d5d88a95d732a6bfc55d',
            'Content-type': 'application.json',
        },
        credentials: 'same-origin'
    }

    //set the restaurant data
    useEffect(() => {
        axios.get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantID}`, header)
        .then((response) => {
            setRestData({
                name: response.data.name,
                aggregateRating: response.data.user_rating.aggregateRating,
                ratingText: response.data.user_rating.rating_text,
                address: response.data.location.address
            })
        })
    },[])

    //get some reviews!
    const maxCount = 100;
    var sentiment = new Sentiment();

    useEffect(() => {
        axios.get(`https://developers.zomato.com/api/v2.1/reviews?res_id=${restaurantID}&count=${maxCount}`, header)
        .then((response) => {
            const allReviews = response.data.user_reviews
            
            setReviews(
               allReviews.map((item) => {
                   console.log(item.review)
                   return {
                        review: item.review.review_text,
                        result: sentiment.analyze(item.review.review_text),
                        user: item.review.user.name
                   }
               }) 
            ) //end setReviews

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
            <div className = "restaurant-reviews"> {/*if the review had a negative sentiment, put here*/}
                {reviews.map((item) => {
                    if (item.result.score < 1) {
                    return (
                        <Review thisReview = {item}/>
                    )}
                })}


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