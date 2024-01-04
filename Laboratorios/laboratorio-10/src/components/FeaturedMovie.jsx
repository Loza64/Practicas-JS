import React from "react";
import { Link } from "react-router-dom";
import ArrowDown from "../assets/down-arrow.png";

const FeaturedMovie = ({ movie }) => {
  return (
    <div className="right-gradient container relative grid w-full md:aspect-video md:grid-cols-2">
      <div className="vertical-gradient | relative w-full md:absolute md:aspect-video">
        <img
          alt={movie?.title}
          src={movie?.cover || "https://m.media-amazon.com/images/I/71yCx0m21kL.jpg"}
          width={1920}
          height={1080}
          className=" z-0 object-cover md:aspect-video object-top opacity-80 md:absolute md:inset-0"
        />
        <a
          href="#movie-list"
          aria-label="Scroll down to movie list"
          className="absolute bottom-10 right-7 z-10"
        >
          <img
            alt=""
            src={ArrowDown}
            width={40}
            height={40}
            className="filter-invert"
          />
        </a>
      </div>

      <div className="lateral-gradient | z-10 flex flex-col justify-center p-8">
        <h2 className="text-2xl font-bold tracking-wider md:text-3xl lg:text-5xl">
          {movie?.title || "Movie title"}
        </h2>

        <div className="mb-3 flex flex-row items-center">
          <p className=" text-lg font-bold text-blue-700 md:text-3xl">
            {movie?.stars || 0}
            <span className="ml-2 text-base font-normal text-white">/ 5</span>
          </p>
          <p className="ml-2 text-base font-normal text-white">◦ Movie</p>
        </div>

        <Link
          className="w-fit text-blue-500 transition hover:text-blue-300"
          to={`/movie/${movie?._id}`}
        >
          More info
        </Link>
      </div>
    </div>
  );
};

export default FeaturedMovie;
