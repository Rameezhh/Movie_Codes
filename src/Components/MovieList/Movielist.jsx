import { Grid } from "@mui/material";
import React from "react";
import { Movie } from "..";

const Movielist = ({ movies }) => {
  return (
    <div>
      <Grid container>
        {movies.results.map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>
    </div>
  );
};

export default Movielist;
