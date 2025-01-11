import axios from "axios";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime/52991/reviews", {
        params: {
          limit: 2,
        },
      })
      .then((res) => setReviews(res.data.data.slice(0, 2)))
      .catch((err) => console.log(err));
  }),
    [];
 
  return (
    <>
      <div className="border border-gray-700 p-4">
        <h1 className="font-bold text-3xl">Reviews</h1>
        {reviews.map((review) => (
          <ReviewCard props={review} />
        ))}
      </div>
    </>
  );
}

export default Reviews;
