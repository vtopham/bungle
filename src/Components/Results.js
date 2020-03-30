//Only Anthony changes this code
import React from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";

function Results(props) {
  const { location, setLocation, restaurantID, setRestaurantID } = props;

  const { path, url } = useRouteMatch();

  return (
    <div className="result-container">
      <div className="single-card">
        <h3>restaurant's name</h3>
        <div className="rating">
          <span>rating</span>
          <span>icons here 3.1</span>
        </div>
        <div className="reviews">
          <p>review one</p>
          <p>review two</p>
        </div>

        <div className="more">
          <Link to={`${url}/${restaurantID}`}>see more</Link>
        </div>
      </div>
    </div>
  );
}

export default Results;

// <Link to={`${url}/${restaurantID}`}>card</Link> {/*EXAMPLE LINK*/ }

////
