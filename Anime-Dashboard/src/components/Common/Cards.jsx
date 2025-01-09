import React from "react";
import { Link } from "react-router-dom";

function Cards({props}) {
  return (
    <div className="flex flex-col md:w-[30%] lg:w-[15%] w-[45%] mx-auto py-2 relative container">
      <Link key={props.mal_id} to={`/anime/${props.mal_id}`}>
        <img
          src={props.images?.webp?.large_image_url}
          alt=""
          className="aspect-[2/3]"
        />
        <div className="overlay">
          <div className="text flex-col">
            <h1>{props.title}</h1>
            <p className="text-sm">
              ⭐ {props.score} - {props.episodes} Episodes
            </p>
            <p className="text-sm my-2">{`${props.synopsis?.slice(
              0,
              150
            )}...`}</p>
          </div>
        </div>
        <div className="my-2">
          <h1>{props.title}</h1>
          <p>
            ⭐ {props.score} - 🗓 {props.year}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
