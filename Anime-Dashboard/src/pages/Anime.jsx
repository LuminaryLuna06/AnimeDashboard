import React, { useState, useEffect } from "react";
import UpcomingAnime from "../components/AnimePage/UpcomingAnime";
import SearchAnime from "../components/AnimePage/SearchAnime";


function Anime() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        {/* Search anime */}
        <SearchAnime />

        {/* Upcoming Anime */}
        <UpcomingAnime />
      </div>
    </>
  );
}

export default Anime;
