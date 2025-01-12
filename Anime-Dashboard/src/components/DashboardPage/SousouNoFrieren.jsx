import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimeVoteChart from "./AnimeVoteChart";
import AnimeCompletionChart from "./AnimeCompletionChart";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";
import Button from "../Common/Button";

function SousouNoFrieren() {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/anime", {
        params: {
          limit: 1,
        },
      })
      .then((response) => setAnime(response.data.data[0]))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div className="h-[100vh]"></div>;
  }

  return (
    <>
      <div className="lg:w-[80%] w-[90%] mx-auto animate-fadeIn">
        <div className="flex flex-col gap-5 lg:flex-row">
          {/* Left */}
          <div className="">
            <img
              src={anime.images?.webp?.large_image_url}
              alt="Top #1 anime image"
            />
          </div>

          {/* Right */}
          <div className="lg:w-1/2 md:w-full mx-auto flex flex-col">
            {/* Title */}
            <div className="my-4">
              <h1 className="font-bold text-4xl bg-gradient-to-r from-green-400 from-10%  to-blue-300 inline-block text-transparent bg-clip-text">
                {anime.title}
              </h1>
              <h1 className="text-xl text-gray-400 font-bold">
                {anime.title_english}
              </h1>
            </div>
            <div className="flex flex-row gap-2 mb-5">
              {anime?.genres?.map((genre, index) => (
                <div
                  key={index}
                  className="badge border-pink-400 text-pink-400 badge-outline"
                >
                  {genre.name}
                </div>
              )) || (
                <div className="badge badge-secondary badge-outline">N/A</div>
              )}
            </div>

            {/* Statistic */}
            <div className="flex  bg-gradient-to-r from-gray-800 ">
              {/* Score */}
              <div className=" text-center my-4 mx-3 ">
                <p className="bg-pink-500 rounded text-white text-sm">SCORE</p>
                <h1 className="text-2xl text-white">{anime.score}</h1>
                <p className="text-[10px] text-gray-300">
                  {anime.scored_by?.toLocaleString()} users
                </p>
              </div>

              {/* Ranking */}
              <div className="flex gap-5 items-center text-xl border border-gray-500 pl-5 lg:pr-16 pr-4">
                <h2>
                  Ranked <span className="font-bold">#{anime.rank}</span>{" "}
                </h2>
                <h2>
                  Popularity{" "}
                  <span className="font-bold">#{anime.popularity}</span>
                </h2>
                <h2>
                  Favorites{" "}
                  <span className="font-bold">
                    {anime.favorites?.toLocaleString()}
                  </span>
                </h2>
              </div>
            </div>

            <Button content={"Watch Trailer"} link={`/anime/${anime.mal_id}`} />
            <hr />

            {/* Infomation */}
            <div className="my-5">
              <div>
                <h2 className="font-bold">Synopsis</h2>
                <p className="text-[14px] hidden lg:block">{anime?.synopsis}</p>
                <p className="text-[14px] lg:hidden">
                  {anime?.synopsis?.slice(0, 200)}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="lg:w-[80%] w-[95%] my-5 mx-auto flex lg:flex-row flex-col border-gray-700 border">
        <div className="lg:w-1/2 my-5">
          <AnimeVoteChart />
        </div>
        <div className="lg:w-1/2 my-5">
          <AnimeCompletionChart />
        </div>
      </div>

      {/* Reviews */}
      <div className="lg:w-[80%] lg:text-left text-center w-[95%] mx-auto">
        <Reviews />
      </div>
    </>
  );
}

export default SousouNoFrieren;