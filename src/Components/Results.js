//Only Anthony changes this code
import React from "react";
import { useParams, useRouteMatch, Link } from "react-router-dom";

function Results(props) {
  const { location, setLocation, restaurantID, setRestaurantID } = props;

  const { path, url } = useRouteMatch();

  return (
    <div className="result-container">
      <div className="single-card">
        <p>hello</p>
      </div>
    </div>
  );
}

export default Results;

// <Link to={`${url}/${restaurantID}`}>card</Link> {/*EXAMPLE LINK*/ }
