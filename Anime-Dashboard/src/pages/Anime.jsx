import React, { useState, useEffect } from "react";
import UpcomingAnime from "../components/HomePage/UpcomingAnime";
import SearchAnime from "../components/AnimePage/SearchAnime";
import TopAnime from "../components/AnimePage/TopAnime";

function Anime() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="w-[95%] mx-auto">
        {/* Search anime */}
        <SearchAnime />

        {/* Top Anime Of All Time */}
        <TopAnime />
      </div>
    </>
  );
}

export default Anime;
