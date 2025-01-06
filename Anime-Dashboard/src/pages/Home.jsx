import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import HeroSection from "../components/HomePage/HeroSection";
import { Link } from "react-router-dom";

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
      <HeroSection />
      <div className="w-[95%] mx-auto">
        {/* HeroSection */}
        <div className="py-4 w-[]">
          <div className="py-4">
            <h1 className="text-3xl">Trending Anime</h1>
            <p className="text-md text-gray-400">
              Find the best new and continuing simulcasts here!
            </p>
          </div>

          {/* Cards */}
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
    </>
  );
}

export default Home;
