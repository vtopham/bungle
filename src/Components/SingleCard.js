import React from "react";
import { GoStar } from "react-icons/go";
import { MdStarHalf } from "react-icons/md";
import { useRouteMatch, Link } from "react-router-dom";

const SingleCard = ({ restaurant, restId }) => {
  const { path, url } = useRouteMatch();

  const { name, user_rating, featured_image } = restaurant;

  const newArr = [];
  const toNum = Number(user_rating.aggregate_rating[0]);
  const lastDigit = Number(user_rating.aggregate_rating[2]);

  for (let i = 0; i < toNum; i++) {
    newArr.push(1);
  }

  const img = featured_image
    ? featured_image
    : "https://images.unsplash.com/photo-1484230836131-717d7ce3298d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80";

  return (
    <div className="single-card">
      <h3>{name}</h3>
      <div className="rating">
        <span>{`Rating:`}</span>
        <span>{user_rating.rating_text}</span>

        <span>
          {newArr.map((icon, i) => (
            <GoStar key={i} />
          ))}
          {lastDigit >= 3 ? <MdStarHalf /> : ""}
        </span>
      </div>
      <div className="reviews-container">
        <div className="review">
          <img className = "card-image" src={img} alt={name} />
        </div>
      </div>

      <div className="more">
        <Link to={`${url}/${restId}`}>Check reviews</Link>
      </div>
    </div>
  );
};

export default SingleCard;
