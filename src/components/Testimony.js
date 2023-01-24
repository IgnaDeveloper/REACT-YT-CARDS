import React from "react";
import "../stylesheets/Testimony.css";

export function Testimony(props) {
  return (
    <div className="container-testimony">
      <img
        className="image-testimony"
        src={require(`../images/${props.image}`)}
        alt="profile-image"
      />
      <div className="container-text-testimony">
        <p className="name-testimony">
          {props.name} in {props.country}
        </p>
        <p className="work-testimony">{props.work}</p>
        <p className="text-testimony">{props.testimony}</p>
      </div>
    </div>
  );
}
