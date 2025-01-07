import React, { useEffect, useState } from "react";
import AnimeVoteChart from "../components/AdminPage/AnimeVoteChart";
import axios from "axios";
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
      <div className="w-[60%] mx-auto">
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
              <p className="text-sm">⭐ {anime.score}</p>
              <p className="text-sm">{anime.episodes} Episodes</p>
              <p className="text-md">{anime.synopsis}</p>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px",height:"50vh",marginBottom:"10px" }}
          >
            <AnimeVoteChart />
          </div>
        </div>

        {/* <AnimeCompletionChart /> */}
      </div>
    </>
  );
}

export default Admin;
