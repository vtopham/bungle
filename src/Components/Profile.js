/// this component is for the information about ourselves
// created by Anthony
import React from "react";

const Profile = ({ image, name, github, website, worst }) => {
  return (
    <div className="profile">
      <div className="bg-img">
        <img src={image} alt={name} />
      </div>
      <div className="profile-info">
        <p>{name}</p>
        <p className="github">
          <a href={github} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </p>
        <p className="website">
          <a href={website} target="_blank" rel="noopener noreferrer">
            website
          </a>
        </p>
      </div>

      <div className="worst-date">
        <h3>my worse date</h3>
        <section>
          <p>
            {worst}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Profile;
