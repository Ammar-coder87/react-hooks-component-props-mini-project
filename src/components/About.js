import React from "react";

function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/215";
  const altText = "blog logo";

  return (
    <aside>
      <img src={image || defaultImage} alt={altText} />
      <p>{about}</p>
    </aside>
  );
}

export default About;