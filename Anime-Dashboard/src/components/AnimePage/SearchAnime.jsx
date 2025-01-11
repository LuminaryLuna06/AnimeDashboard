import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Common/Cards";
import CardSkeleton from "../Loading/CardSkeleton";

function SearchAnime() {
  const [search, setSearch] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searched, setSearched] = useState(false);

  // Search
  function HandleSearch(e) {
    e.preventDefault();
    FetchAnime(search);
  }
  async function FetchAnime(query) {
    axios
      .get("https://api.jikan.moe/v4/anime", {
        params: {
          q: `${query}`,
          limit: 6,
          sfw: true,
        },
      })
      .then((res) => setAnimes(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        setSearched(true);
      });
  }

  return (
    <>
      <form className="max-w-md mx-auto my-5" onSubmit={HandleSearch}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50  "
            placeholder="Search for an anime..."
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-pink-500 hover:bg-pink-600   font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      {!searched ? null : (
        <div className="mx-auto">
          <div className="my-3 ">
            <h1 className="font-bold text-3xl py-3">Your search results:</h1>
            <div className="flex flex-wrap items-start ">
              {isLoading ? (
                <CardSkeleton cards={6} />
              ) : (
                animes.map((anime) => (
                  <Cards key={anime.mal_id} props={anime} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchAnime;
