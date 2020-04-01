//Only Anthony changes this code
import React from "react";

// import { useParams, useRouteMatch, Link } from "react-router-dom";

import SingleCard from "./SingleCard";

function Results(props) {
  const {
    location,
    setLocation,
    restaurantID,
    setRestaurantID,
    zSearchResults
  } = props;

  console.log("original ", zSearchResults);

  //   const { path, url } = useRouteMatch();

  return (
    <div className="result-container">
      {zSearchResults.map(resta => (
        <SingleCard
          restaurantID={restaurantID}
          key={resta.restaurant.id}
          restaurant={resta.restaurant}
          restId={resta.restaurant.id}
        />
      ))}
    </div>
  );
}

export default Results;
