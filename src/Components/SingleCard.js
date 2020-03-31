import React from "react";
import { GoStar } from "react-icons/go";
import { useRouteMatch, Link } from "react-router-dom";

const SingleCard = ({ restaurant, restId }) => {
  const { path, url } = useRouteMatch();

  const { name, user_rating, featured_image } = restaurant;

  //   const rounded

  const img = featured_image
    ? featured_image
    : "https://images.unsplash.com/photo-1484230836131-717d7ce3298d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80";

  return (
    <div className="single-card">
      <h3>{name}</h3>
      <div className="rating">
        <span>{`Rating:${""} ${user_rating.rating_text}`}</span>
        <span>{user_rating.aggregate_rating}</span>
        <span>
          <GoStar />
          <GoStar />
          <GoStar />
        </span>
      </div>
      <div className="reviews-container">
        <div className="review">
          <img src={img} alt={name} />
        </div>
      </div>

      <div className="more">
        <Link to={`${url}/${restId}`}>see more</Link>
      </div>
    </div>
  );
};

export default SingleCard;
