import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AnimePage() {
  const { id } = useParams();
  const [anime, setAnime] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0)
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => {
        setAnime(response.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="h-[100vh]"></div>
      ) : (
        <>
          <div className="w-full lg:w-[60%] md:w-[80%]  h-full mx-auto mt-5">
            <figure className="aspect-[16/9]">
              <iframe
                className="w-full h-full"
                width="1044"
                height="587"
                src={anime?.trailer.embed_url}
                title=""
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </figure>

            <div className="flex flex-col gap-3 my-5 px-2">
              <h1 className="text-3xl font-bold">{anime?.title}</h1>
              <p className="text-lg font-thin text-left">
                {anime?.aired?.from
                  ? new Date(anime.aired.from).getFullYear()
                  : "unknown"}
                &nbsp; - &nbsp;
                {anime?.episodes ?? "N/A"} eps &nbsp; - ⭐ {anime?.score}
                &nbsp; - 🏆 top #{anime?.rank}
              </p>
              <div className="flex flex-row gap-2">
                {anime?.genres?.map((genre, index) => (
                  <div
                    key={index}
                    className="badge border-pink-400 text-pink-400 badge-outline"
                  >
                    {genre.name}
                  </div>
                )) || (
                  <div className="badge badge-secondary badge-outline">N/A</div>
                )}
              </div>
              <p className="font-thin mt-3 text-left">{anime?.synopsis}...</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AnimePage;
