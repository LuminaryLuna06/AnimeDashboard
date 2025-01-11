import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSkeleton from "../Loading/CardSkeleton";
import Cards from "../Common/Cards"

function GenresPage() {
  const { genreId, genreName } = useParams();
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`https://api.jikan.moe/v4/anime`, {
        params: {
            genres:`${genreId}`,
            min_score:8,
            order_by:"rank",
            sfw:true
        }
      })
      .then((response) => setAnime(response.data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [genreId]);
  console.log(anime)
  return (
    <div className="w-[95%] h-auto mx-auto">
      <div className="py-4 ">
        <div className="py-4">
          <h1 className="text-4xl">{genreName}</h1>
          <p className="text-md text-gray-400">
            Discover anime of your taste!
          </p>
        </div>

        <div className="flex flex-wrap items-start ">
          {isLoading ? (
            <CardSkeleton cards={24} />
          ) : (
            anime.map((anime) => <Cards key={anime.mal_id} props={anime} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default GenresPage;
