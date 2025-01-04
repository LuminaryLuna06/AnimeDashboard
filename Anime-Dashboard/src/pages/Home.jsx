import React from "react";
import Cards from "../components/Cards";

function Home() {
  return (
    <div className="w-[95%] mx-auto">
      {/* HeroSection */}
      <div className="py-4">
        <div className="py-4">
            <h1 className="text-3xl">Trending Anime</h1>
            <p className="text-md text-gray-400">Find the best new and continuing simulcasts here!</p>
        </div>

        {/* Cards */}
        <div className="flex flex-row flex-wrap gap-4">
            <Cards />
            <Cards />
            

        </div>
      </div>
    </div>
  );
}

export default Home;
