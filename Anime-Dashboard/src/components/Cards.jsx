import React from "react";

function Cards({title, rating, episodes, description, aired, image}) {
  return (
    <div className="flex flex-col gap-2 md:w-[30%] lg:w-[15%] w-[45%] mx-2 py-2 relative container">
      <img src={image} alt="" className="aspect-[2/3]" />
      <div className="overlay">
        <div className="text flex-col">
          <h1>{title}</h1>
          <p className="text-sm">⭐ {rating}</p>
          <p className="text-sm">{episodes} Episodes</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div>
        <h1>{title}</h1>
        <p>
          ⭐ {rating} - 🗓 {aired}
        </p>
      </div>
    </div>
  );
}

export default Cards;
