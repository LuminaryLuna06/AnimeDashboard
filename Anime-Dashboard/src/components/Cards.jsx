import React from "react";

function Cards(link, title, rating, episodes) {
  return (
    <div className="flex flex-col gap-2 lg:w-1/6 w-1/3 mx-2 relative container">
      <img src="https://picsum.photos/200/300" alt="" className="w-full" />
      <div className="overlay">
        <div className="text">
          <h1>Anime Title</h1>
          <p className="text-md">⭐ 9.5</p>
          <p className="text-sm">24 Episodes</p>
          <p className="text-sm">Descriptions</p>
        </div>
      </div>
      <div>
        <h1>Anime Title</h1>
        <p>⭐ 9.5 - 🗓 2025</p>
      </div>
    </div>
  );
}

export default Cards;
