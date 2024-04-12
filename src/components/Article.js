import React from "react";

function Article({ title, date, preview, minutes }) {
  const renderReadingTime = (minutes) => {
    let emojis = [];
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      emojis = Array(coffeeCups).fill("☕️");
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      emojis = Array(bentoBoxes).fill("🍱");
    }
    return emojis.join("");
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date ? date : "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>
        {renderReadingTime(minutes)} {minutes} min read
      </p>
    </article>
  );
}

export default Article;