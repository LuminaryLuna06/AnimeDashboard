import React, { useState, useEffect } from "react";
import axios from "axios";
import UpcomingCard from "../Common/UpcomingCard";
import CardSkeleton from "../Loading/CardSkeleton";

function UpcomingAnime() {
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/seasons/upcoming", {
        params: {
          limit: 6,
        },
      })
      .then((response) => setAnimes(response.data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  });

  return (
    <>
      <div className="w-[95%] mx-auto">
        <div className="py-4 ">
          <h1 className="text-3xl font-bold my-3">⭐Upcoming 2025 Anime⭐</h1>
          {/* Upcoming */}

          {isLoading ? (
            <div className="flex flex-wrap items-start ">
              <CardSkeleton cards={6} />
            </div>
          ) : (
            <div className="flex flex-wrap items-start ">
              {animes.map((anime) => (
                <UpcomingCard key={anime.mal_id} props={anime} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UpcomingAnime;
