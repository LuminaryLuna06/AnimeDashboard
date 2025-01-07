import React from "react";
import { Link } from "react-router-dom";

function UpcomingCard({ title, image, id }) {
  return (
    <div className="flex flex-col gap-2 md:w-[30%] lg:w-[15%] w-[45%] mx-2 py-2 relative container">
      <Link key={id} to={`/anime/${id}`}>
        <img src={image} alt="" className="aspect-[2/3]" />
        <div className="overlay">
          <div className="text flex-col">
            <h1>{title}</h1>
          </div>
        </div>
        <div>
          <h1>{title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default UpcomingCard;
