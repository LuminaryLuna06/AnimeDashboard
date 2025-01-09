import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Common/Cards";
import Loading from "../Common/Loading";

function Trending() {
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime", {
        params: {
          order_by: "popularity",
          sort: "asc",
          limit: 6,
          min_score: 8.0,
          status: "airing",
          start_date: "2024-10-01",
        },
      })
      .then((response) => setAnimes(response.data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-[95%] lg:h-auto mx-auto animate-fadeIn">
      <div className="py-4 ">
        <div className="py-4">
          <h1 className="text-4xl">⭐Trending Anime⭐</h1>
          <p className="text-md text-gray-400">
            Find the best new and continuing simulcasts here!
          </p>
        </div>

        <div className="flex flex-wrap items-start ">
          {animes.map((anime) => (
            <Cards key={anime.mal_id} props={anime} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
