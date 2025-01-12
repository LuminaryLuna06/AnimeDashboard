import React, { useEffect, useState } from "react";
import Club from "../Common/Club";
import axios from "axios";
import ClubSkeleton from "../Loading/ClubSkeleton";

function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/clubs")
      .then((res) => setClubs(res.data.data.slice(0, 4)))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      <div className="w-[95%] md:w-[80%] mx-auto my-5">
        <h1 className="font-bold text-3xl my-3">Clubs</h1>
        {isLoading ? (
          <ClubSkeleton cards={4} />
        ) : (
          clubs.map((club) => <Club club={club} />)
        )}
      </div>
    </>
  );
}

export default Clubs;
