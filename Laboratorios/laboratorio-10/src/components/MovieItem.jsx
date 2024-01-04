import { Link } from "react-router-dom";

const MovieItem = ({ _id, title, cover }) => {
  return (
    <div className="movie-item movie-gradient | relative mx-auto w-fit overflow-hidden rounded-md">
      <img
        src={cover ? cover : "../assets/no-image.png"}
        alt={title}
        width={300}
        height={168}
        className="movie-image | object-cover aspect-video bg-white opacity-70 drop-shadow-md transition"
      />

      <div className="absolute bottom-0 left-0 z-10 w-full p-3">
        <h3 className="max-w-[277px] overflow-hidden text-ellipsis whitespace-nowrap text-base font-semibold">
          {title}
        </h3>
      </div>
      <Link to={`/movie/${_id}`} className="absolute inset-0 z-30">
        <span className="sr-only">More details about {title}</span>
      </Link>
    </div>
  );
};

export default MovieItem;
