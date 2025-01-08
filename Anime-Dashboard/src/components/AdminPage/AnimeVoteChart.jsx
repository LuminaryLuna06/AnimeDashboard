import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AnimeVoteChart() {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime/54857/statistics")
      .then((res) => setVotes(res.data.data.scores))
      .catch((err) => console.log(err));
    console.log(votes);
  }, []);
  return (
    <>
      <h1 className="font-bold text-3xl my-5">User votes</h1>
      <ResponsiveContainer width="100%" height={400} style={{marginTop:"4px", marginBottom:"4px"}}>
        <BarChart
          width={500}
          height={300}
          data={votes}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="score" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="votes"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default AnimeVoteChart;
