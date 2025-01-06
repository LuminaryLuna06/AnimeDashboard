import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AnimePage() {
  const { id } = useParams();
  const [anime, setAnime] = useState();
  //   const [url, setUrl] = useState();

  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => {
        setAnime(response.data.data);
        // setUrl(response.data.data.trailer.embed_url);
      })
      .catch((err) => console.err(err));
  }, []);

  return (
    <>
      {!anime ? (<p>Loading...</p>) : (
        <div className="w-full lg:w-[70%] md:w-[80%]  h-[100vh] mx-auto mt-5">
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
            &nbsp; - 🏆 top {anime?.popularity}
          </p>
          <div className="flex flex-row gap-2">
            {anime?.genres?.map((genre, index) => (
              <div key={index} className="badge badge-secondary badge-outline">
                {genre.name}
              </div>
            )) || (
              <div className="badge badge-secondary badge-outline">N/A</div>
            )}
          </div>
          <p className="font-thin mt-3 text-left">
            {anime?.synopsis.slice(0, 500)}...
          </p>
        </div>
      </div>
      )}
    </>
  );
}

export default AnimePage;