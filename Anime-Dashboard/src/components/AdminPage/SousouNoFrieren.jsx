import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimeVoteChart from "./AnimeVoteChart";
import AnimeCompletionChart from "./AnimeCompletionChart";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";

function SousouNoFrieren() {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/anime", {
        params: {
          limit: 1,
        },
      })
      .then((response) => setAnime(response.data.data[0]))
      .catch((err) => console.log(err));
    console.log(anime);
  }, []);
  return (
    <>
      <div className="lg:w-[80%] w-[90%] mx-auto">
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
                <p className="text-[10px] text-gray-300">571,829 users</p>
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
                  Favourites <span className="font-bold">59,827</span>
                </h2>
              </div>
            </div>

            <Link
              className="my-5 w-fit"
              key={anime.mal_id}
              to={`/anime/${anime.mal_id}`}
            >
              <button className="border border-pink-400 rounded p-3 my-5  hover:bg-pink-400 hover:border-gray-500">
                Watch Trailer
              </button>
            </Link>

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
