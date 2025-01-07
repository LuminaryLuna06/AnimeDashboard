import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Cards";
function TopAnime() {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/anime", {
        params: {
          limit: 12,
        },
      })
      .then((response) => setAnimes(response.data.data))
      .catch((err) => console.err(err));
  });

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold my-3">⭐Top animes of all times!⭐</h1>
        {/* Top */}
        <div className="flex flex-wrap items-start ">
          {animes.map((anime) => (
            <Cards
              image={anime.images.webp.large_image_url}
              title={anime.title}
              rating={anime.score}
              episodes={anime.episodes}
              description={`${anime.synopsis.slice(0, 150)}...`}
              aired={anime.year}
              id={anime.mal_id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TopAnime;
