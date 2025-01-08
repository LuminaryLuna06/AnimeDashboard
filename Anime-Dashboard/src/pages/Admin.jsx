import React, { useEffect, useState } from "react";
import axios from "axios";

import AnimeVoteChart from "../components/AdminPage/AnimeVoteChart";
import AnimeCompletionChart from "../components/AdminPage/AnimeCompletionChart";
import HorizontalBarChart from "../components/AdminPage/HorizontalBarChart";


function Admin() {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime/54857")
      .then((res) => setAnime(res.data.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className="w-[90%] lg:w-[60%] md:w-[75%] mx-auto">
        <h1 className="font-bold text-3xl my-5">Anime statistic</h1>

        <div className=" h-full">
          {/* Anime Info */}
          <div className="flex flex-col lg:flex-row">
            <img
              src={anime.images?.webp?.large_image_url}
              alt=""
              className="aspect-[9/13]"
            />
            <div className="px-5">
              <h2 className="font-bold text-3xl">{anime.title}</h2>
              <p className="text-sm">
                ⭐ {anime.score} - {anime.episodes} Episodes
              </p>
              <p className="text-md">{anime?.synopsis?.slice(0, 150)}...</p>
            </div>
          </div>
        </div>

        {/* Vote chart */}
        <AnimeVoteChart />
        {/* <AnimeCompletionChart /> */}
        <AnimeCompletionChart />

        {/* <HorizontalBarChart /> */}
      </div>
    </>
  );
}

export default Admin;
