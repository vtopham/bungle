//Only Anthony changes this code
import React from "react";
import { GoStar } from "react-icons/go";
import { useParams, useRouteMatch, Link } from "react-router-dom";

function Results(props) {
  const { location, setLocation, restaurantID, setRestaurantID } = props;

  const { path, url } = useRouteMatch();

  return (
    <div className="result-container">
      <div className="single-card">
        <h3>restaurant's name</h3>
        <div className="rating">
          <span>Restaurant Rating</span>
          <span>
            <GoStar />
            <GoStar />
            <GoStar />
          </span>
        </div>
        <div className="reviews-container">
          <p className="review-title">reviews</p>
          <div className="review">
            <p>"review one"</p>
            <p>"review two"</p>
          </div>
        </div>

        <div className="more">
          <Link to={`${url}/${restaurantID}`}>see more</Link>
        </div>
      </div>

      <div className="single-card">
        <h3>restaurant's name</h3>
        <div className="rating">
          <span>Restaurant Rating</span>
          <span>
            <GoStar />
            <GoStar />
            <GoStar />
          </span>
        </div>
        <div className="reviews-container">
          <p className="review-title">reviews</p>
          <div className="review">
            <p>"review one"</p>
            <p>"review two"</p>
          </div>
        </div>

        <div className="more">
          <Link to={`${url}/${restaurantID}`}>see more</Link>
        </div>
      </div>

      <div className="single-card">
        <h3>restaurant's name</h3>
        <div className="rating">
          <span>Restaurant Rating</span>
          <span>
            <GoStar />
            <GoStar />
            <GoStar />
          </span>
        </div>
        <div className="reviews-container">
          <p className="review-title">reviews</p>
          <div className="review">
            <p>"review one"</p>
            <p>"review two"</p>
          </div>
        </div>

        <div className="more">
          <Link to={`${url}/${restaurantID}`}>see more</Link>
        </div>
      </div>

      <div className="single-card">
        <h3>restaurant's name</h3>
        <div className="rating">
          <span>Restaurant Rating</span>
          <span>
            <GoStar />
            <GoStar />
            <GoStar />
          </span>
        </div>
        <div className="reviews-container">
          <p className="review-title">reviews</p>
          <div className="review">
            <p>"review one"</p>
            <p>"review two"</p>
          </div>
        </div>

        <div className="more">
          <Link to={`search/${url}/${restaurantID}`}>see more</Link>
        </div>
      </div>
    </div>
  );
}

export default Results;
