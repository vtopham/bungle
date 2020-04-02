//Only Anthony changes this code
import React from "react";

import SingleCard from "./SingleCard";

function Results(props) {
  const { restaurantID, zSearchResults } = props;
  

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
