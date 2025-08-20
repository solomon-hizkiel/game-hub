import useData from "@/hooks/useData";
import useGenres, { type Genre } from "@/hooks/usGenres";
import React from "react";

const GenreList = () => {
  const { data } = useGenres();

  //if (isLoading) return <div>Loading...</div>;
  //if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
export default GenreList;
