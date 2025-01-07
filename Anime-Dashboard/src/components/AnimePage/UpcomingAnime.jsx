import React, { useState, useEffect } from "react";
import axios from "axios";
import UpcomingCard from "../UpcomingCard";
function UpcomingAnime() {
  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/seasons/upcoming", {
        params: {
          limit: 6,
        },
      })
      .then((response) => setAnimes(response.data.data))
      .catch((err) => console.err(err));
  });

  return (
    <>
      <h1 className="text-3xl font-bold">Upcoming 2025 Anime</h1>
      {/* Upcoming */}
      <div className="flex flex-wrap items-start ">
        {animes.map((anime) => (
          <UpcomingCard
            image={anime.images.webp.large_image_url}
            title={anime.title}
            id={anime.mal_id}
          />
        ))}
      </div>
    </>
  );
}

export default UpcomingAnime;
