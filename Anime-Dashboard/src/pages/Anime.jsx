import React, { useState, useEffect } from "react";
import UpcomingAnime from "../components/AnimePage/UpcomingAnime";
import SearchAnime from "../components/AnimePage/SearchAnime";
import TopAnime from "../components/AnimePage/TopAnime";

function Anime() {
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
