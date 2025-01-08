import React, { useEffect, useState } from "react";
import axios from "axios";

import AnimeVoteChart from "../components/AdminPage/AnimeVoteChart";
import AnimeCompletionChart from "../components/AdminPage/AnimeCompletionChart";
import HorizontalBarChart from "../components/AdminPage/HorizontalBarChart";
import SousouNoFrieren from "../components/AdminPage/SousouNoFrieren";

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
      {/* Current top anime */}
      <div className="h-full my-auto">
        <SousouNoFrieren />
      </div>
    </>
  );
}

export default Admin;
