import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import HeroSection from "../components/HomePage/HeroSection";
import { Link } from "react-router-dom";
import UpcomingAnime from "../components/AnimePage/UpcomingAnime";

function Home() {
  const [animes, setAnimes] = useState([]);
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
      .catch((err) => console.err(err));
  });
  console.log(animes);
  return (
    <>
      {/* HeroSection */}
      <HeroSection />

      <div className="w-[95%] mx-auto">
        <div className="py-4 ">
          {/* Trending */}
          <div className="py-4">
            <h1 className="text-4xl">⭐Trending Anime⭐</h1>
            <p className="text-md text-gray-400">
              Find the best new and continuing simulcasts here!
            </p>
          </div>

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
      </div>
      {/* Banner */}
      <div className="my-5">
        <Link key={48549} to={`/anime/48549`}>
          <img
            src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=2700/CurationAssets/Dr%20STONE%20/SEASON%203/MARKETING%20BANNER/DrSTONE-S3-KV1-Banner-2100x700-EN.png"
            alt="Dr.Stone"
          />
        </Link>
      </div>

      <div className="w-[95%] mx-auto">
        <div className="py-4 ">
          <UpcomingAnime />
        </div>
      </div>
    </>
  );
}

export default Home;
