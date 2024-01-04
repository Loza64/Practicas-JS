import React, { useState } from "react";
import { validateForm } from "../validators/formValidator";
import { Link } from "react-router-dom";
import { createMovie } from "../services/movie.service";

const MovieCreate = () => {
  const initialFormData = {
    title: "",
    review: "",
    stars: 0,
    cover: "",
    favorite: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showErrorConfirmation, setShowErrorConfirmation] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationsErros = validateForm(formData)
    setErrorMessages([])
    if (validationsErros.length > 0) {
      setErrorMessages(validationsErros)
      return;
    }

    try {
      await createMovie(formData)
      setShowConfirmation(true);
      setFormData(formData);
    } catch (error) {
      setErrorMessages([error.message])
      setShowConfirmation(true);
    }
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

  return (
    <main className="max-w-[750px] mx-auto p-8">
      <h2 className="text-2xl pb-6 text-red-500 font-bold tracking-wider text-center">
        Create a new movie
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

        {/* Favorite */}
        <div>
          <label htmlFor="favorite" className="font-semibold">
            Favorite
          </label>

          <input
            id={"favorite"}
            name={"favorite"}
            className={
              "border-gray-400 mt-2 py-2.5 px-4 border rounded-md w-full bg-[#202328]"
            }
            type={"checkbox"}
            checked={formData.favorite}
            onChange={handleChange}
          />
        </div>

        {errorMessages.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Attention:</strong>
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
          Create Movie
        </button>
        <Link to="/">
          <button className="w-full flex items-center justify-center gap-2 rounded-l  px-4 py-2 font-bold text-white transition border-red-600 border-2">
            Return
          </button>
        </Link>
      </form>
      {/* Ventana emergente de confirmación */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md" style={{ color: "black" }}>
            <p className="text-lg font-semibold mb-4">
              Movie created successfully!
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
              Error occurred while creating the movie. Please try again.
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

export default MovieCreate;
