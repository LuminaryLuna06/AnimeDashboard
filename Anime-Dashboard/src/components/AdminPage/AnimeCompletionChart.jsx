import axios from "axios";
import React, { PureComponent, useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function AnimeCompletionChart() {
  const [completion, setCompletion] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime/54857/statistics")
      .then((res) => setCompletion(res.data.data))
      .catch((err) => console.log(err));
    console.log(completion);
  }, []);

  const completionData = [
    { name: "Watching", count: completion.watching },
    { name: "Completed", count: completion.completed },
    { name: "Dropped", count: completion.dropped },
    { name: "Plan to Watch", count: completion.plan_to_watch },
  ];
  return (
    <ResponsiveContainer width="100%" height={500}>
      <h1 className="font-bold text-3xl">User watched</h1>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={completionData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="Data"
          dataKey="count"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default AnimeCompletionChart;
