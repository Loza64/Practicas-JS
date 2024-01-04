import React, { useEffect, useState } from "react";
import FeaturedMovie from "../components/FeaturedMovie";
import MovieList from "../components/MovieList";
import Navbar from "../containers/Header";
import { getAllMovies } from "../services/movie.service";

const Home = () => {

  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const movies = await getAllMovies();
    setMovies(movies)
  }

useEffect(()=>{
 getData();
},[])

  return (
    <>
      <Navbar />
      <main>
        <FeaturedMovie movie={movies[0]} />

        <div className="container p-8 md:p-8" id="movie-list">
          <h2 className="text-2xl pb-6 text-red-500 font-bold tracking-wider text-center">
            Featured Movies
          </h2>
          <MovieList movies={movies} />
        </div>
      </main>
    </>
  );
};

export default Home;
