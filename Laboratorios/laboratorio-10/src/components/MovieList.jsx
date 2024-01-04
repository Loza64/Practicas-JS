import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul
        role="list"
        className="grid justify-around gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {movies.map((movie, index) => {
          return (
            <li key={movie._id} role="listitem" className="mt-4">
              <MovieItem {...movie} index={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
