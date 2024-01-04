import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { validateForm } from "../validators/formValidator";
import { getOneMovie, updateMovie } from "../services/movie.service";

const MovieModify = () => {
  const { movieId } = useParams();

  let initialFormData = {
    title: "",
    review: "",
    stars: 0,
    cover: "",
  };



  const [formData, setFormData] = useState(initialFormData);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showErrorConfirmation, setShowErrorConfirmation] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const getMovie = async () => {
    const movie = await getOneMovie(movieId);
      setFormData(movie)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateErros = validateForm(formData);
    setErrorMessages([]);
    if (validateErros.length > 0) {
      setErrorMessages(validateErros);
      return;
    }

    try {
      await updateMovie(movieId, formData);
      setShowConfirmation(true)
      setFormData(formData);
    } catch (error) {
      setErrorMessages([error.message])
      setShowConfirmation(true);
    }
    alert("TODO: modify movie");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const closeErrorConfirmation = () => {
    setShowErrorConfirmation(false);
  };

  useEffect(()=>{
    getMovie()
  },[])

  return (
    <main className="max-w-[750px] mx-auto p-8">
      <h2 className="text-2xl pb-6 text-red-500 font-bold tracking-wider text-center">
        Modify the movie
      </h2>
      <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label htmlFor="title" className="font-semibold text-lg">
            Title
          </label>

          <input
            id={"title"}
            name={"title"}
            className={
              "border-gray-400 mt-2 py-2.5 px-4 border rounded-md w-full bg-[#202328]"
            }
            placeholder={"Enter the title"}
            type={"text"}
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        {/* Review */}
        <div>
          <label htmlFor="review" className="font-semibold">
            Review
          </label>

          <textarea
            id={"review"}
            name={"review"}
            className={
              "border-gray-400 mt-2 py-2.5 px-4 border rounded-md w-full bg-[#202328]"
            }
            placeholder={"Enter the review"}
            type={"text"}
            rows={5}
            value={formData.review}
            onChange={handleChange}
          />
        </div>

        {/* Stars */}
        <div>
          <label htmlFor="stars" className="font-semibold">
            Stars
          </label>

          <input
            id={"stars"}
            name={"stars"}
            className={
              "border-gray-400 mt-2 py-2.5 px-4 border rounded-md w-full bg-[#202328]"
            }
            placeholder={"Enter the stars"}
            type={"number"}
            max={5}
            min={0}
            value={formData.stars}
            onChange={handleChange}
          />
        </div>

        {/* Cover */}
        <div>
          <label htmlFor="cover" className="font-semibold">
            Link of the cover
          </label>

          <input
            id={"cover"}
            name={"cover"}
            className={
              "border-gray-400 mt-2 py-2.5 px-4 border rounded-md w-full bg-[#202328]"
            }
            placeholder={"Enter the cover"}
            type={"text"}
            value={formData.cover}
            onChange={handleChange}
          />
        </div>

        {errorMessages.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Attention!</strong>
            <ul>
              {errorMessages.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-l bg-red-600 px-4 py-2 font-bold text-white transition hover:bg-red-700"
        >
          Update Movie
        </button>
        <Link to="/">
          <button className="w-full flex items-center justify-center gap-2 rounded-l  px-4 py-2 font-bold text-white transition border-red-600 border-2">
            Return
          </button>
        </Link>
      </form>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md" style={{ color: "black" }}>
            <p className="text-lg font-semibold mb-4">
              Movie updated successfully!
            </p>
            <button
              onClick={closeConfirmation}
              className="bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showErrorConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md text-black">
            <p className="text-lg font-semibold mb-4">
              Error occurred while updating the movie. Please try again.
            </p>
            <button
              onClick={() => {
                closeErrorConfirmation();
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default MovieModify;
