import React, { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteOneMovie, getOneMovie, toogleFavorite } from "../services/movie.service";

const MovieInformation = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isMovieFavorited, setIsMovieFavorited] = useState(false);

  const getMovie = async () => {
    const movie = await getOneMovie(movieId);
    setMovie(movie);
    setIsMovieFavorited(movie?.favorite || false);
  };

  const addToFavorites = async () => {
    const favorites = await toogleFavorite(movieId);
    if (favorites) setIsMovieFavorited((prev) => !prev)
    alert("TODO: add movie to favs");
  };

  const deleteMovie = async () => {
    const deleteMovie = await deleteOneMovie(movieId);
    if(deleteMovie) {
      alert("Movie has been deleted");
      navigate('/')
    }
  };


  useEffect(()=>{
    getMovie();
  })
  // TODO: When you finish implementing this component, uncomment this code block
  // if (!movie) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div>
      <div className="movie-info-gradient | container w-full md:relative md:aspect-video md:h-screen 2xl:h-auto">
        <div className="vertical-gradient | relative w-full md:absolute md:aspect-video md:h-screen 2xl:h-auto">
          <img
            alt={movie?.title}
            src={movie?.cover || "../assets/no-image.png"}
            width={1920}
            height={1080}
            className="z-0 object-contain object-top opacity-70 md:absolute md:inset-0 md:h-full md:w-full md:object-cover"
          />
        </div>
        <div className="z-10 flex h-full w-full flex-col justify-center p-8 md:absolute">
          <div className="flex justify-center gap-4">
            <p className=" text-lg font-bold text-blue-700 md:text-3xl">
              {movie?.stars}
              <span className="ml-2 text-lg text-white">/ 5</span>
            </p>
          </div>

          <h2
            className={`my-3 text-center text-3xl font-medium uppercase tracking-wider lg:text-5xl`}
          >
            {movie?.title}
          </h2>

          {/* Controls */}
          <div className="container flex flex-wrap justify-center gap-4 mt-3">
            <div className="flex">
              <button
                type="button"
                className="flex items-center gap-2 rounded bg-blue-500/60 px-4 py-2 font-bold text-white transition hover:bg-blue-500/90"
                onClick={addToFavorites}
              >
                {isMovieFavorited ? (
                  <>
                    <MdFavorite aria-hidden="true" />
                    <span className="sr-only">Remove from favorites</span>
                  </>
                ) : (
                  <>
                    <MdFavoriteBorder aria-hidden="true" />
                    <span className="sr-only">Add to favorites</span>
                  </>
                )}
              </button>
            </div>
            <Link
              className="rounded bg-blue-500/60 px-4 py-2 font-bold text-white transition hover:bg-blue-500/90"
              to={`/modify-movie/${movie?._id}`}
            >
              Modify Movie
            </Link>
            <button
              type="button"
              className="rounded bg-blue-500/60  px-4 py-2 font-bold text-white transition hover:bg-blue-500/90"
              onClick={deleteMovie}
            >
              Delete Movie
            </button>
          </div>
        </div>
      </div>

      {/* Overview section */}
      <div className="container p-6 md:p-8">
        <h2 className="my-4 text-2xl font-medium text-blue-500">Overview</h2>
        <p>{movie?.review}</p>
      </div>
    </div>
  );
};

export default MovieInformation;
