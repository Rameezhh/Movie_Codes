import React from "react";
import { useGetMoviesQuery } from "../../services/TMDB";
import { Movielist } from "..";

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();
  if (isFetching) {
    return <h1>data is fetching</h1>;
  }
  if (error) {
    return <h1>data has an error</h1>;
  }
  if (!data?.results?.length) {
    return <h1>data is not find</h1>;
  }
  return (
    <div className="Dflex">
      <Movielist movies={data} />
    </div>
  );
};

export default Movies;
