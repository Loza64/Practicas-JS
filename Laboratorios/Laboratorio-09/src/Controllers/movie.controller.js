const httpError = require("http-errors");
const Movie = require("../Models/movie.model");

const createMovie = async (req, res, next) => {
  const { title, cover, review, stars } = req.body;
  try {
    const newMovie = new Movie({ title, cover, review, stars });
    const savedMovie = await newMovie.save();
    if (!savedMovie) throw httpError(500, "Movie not created");
    res.status(201).json({ message: "Movie created", data: savedMovie });
  } catch (error) {
    next(error);
  }
};

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    if (!movies) throw httpError(404, "Movies not found");
    res.status(200).json({ data: movies });
  } catch (error) {
    next(error);
  }
};

const getOneMovie = async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) throw httpError(404, "Movie not found");
    res.status(200).json({ data: movie });
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const toUpdateMovie = await Movie.findById(id);
    if (!toUpdateMovie) throw httpError(404, "Movie not found");
    const updatedMovie = await Movie.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedMovie) throw httpError(500, "Movie not updated");
    res.status(200).json({ message: "Movie updated", data: updatedMovie });
  } catch (error) {
    next(error);
  }
};

const toggleMovieFavorite = async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) throw httpError(404, "Movie not found");
    movie.favorite = !movie.favorite;
    const updatedMovie = await movie.save();
    if (!updatedMovie) throw httpError(500, "Movie not updated");
    res.status(200).json({ message: "Update favorite status", data: updatedMovie });
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) throw httpError(404, "Movie not found");
    const deleted = await Movie.findByIdAndDelete(id);
    if (!deleted) throw httpError(500, "Movie not deleted");
    res.status(200).json({ message: "Movie deleted" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMovie,
  getMovies,
  getOneMovie,
  updateMovie,
  toggleMovieFavorite,
  deleteMovie
};