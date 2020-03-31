/// this component is for the information about ourselves
// created by Anthony
import React from "react";

const Profile = ({ image, name, github }) => {
  return (
    <div className="profile">
      <div className="bg-img">
        <img src={image} alt={name} />
      </div>
      <div className="profile-info">
        <p>{name}</p>
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </p>
        <p>
          <a href="google.com" target="_blank" rel="noopener noreferrer">
            website
          </a>
        </p>
      </div>

      <div className="worst-date">
        <h3>my worse date</h3>
        <section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            accusantium voluptatem similique, iure voluptate mollitia? Veritatis
            maxime ullam magnam tenetur.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Profile;
