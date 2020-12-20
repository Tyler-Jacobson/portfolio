import React from "react";

export default function Project(props) {
  const { name, image, description } = props.location.state;

  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <img src={image} alt={`Details for ${name}`} />
    </div>
  );
}
