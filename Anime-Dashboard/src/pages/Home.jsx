import React from "react";
import { Link } from "react-router-dom";

import HeroSection from "../components/HomePage/HeroSection";
import UpcomingAnime from "../components/HomePage/UpcomingAnime";
import Trending from "../components/HomePage/Trending";

function Home() {
  window.scrollTo(0, 0);

  return (
    <>
      {/* HeroSection */}
      <HeroSection />

      {/* Trending */}
      <Trending />

      {/* Banner */}
      <div className="my-5">
        <Link key={48549} to={`/anime/48549`}>
          <img
            // src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=2700/CurationAssets/Dr%20STONE%20/SEASON%203/MARKETING%20BANNER/DrSTONE-S3-KV1-Banner-2100x700-EN.png"
            src="banner.avif"
            alt="Dr.Stone"
          />
        </Link>
      </div>

      {/* Upcoming */}
      <UpcomingAnime />
    </>
  );
}

export default Home;
