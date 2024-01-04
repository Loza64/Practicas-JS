import axios from "axios";
const BASE_URL = "http://localhost:4000/api/v1";

export const createMovie = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/movies`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al realizar la petición:', error);
    throw new Error("Error occurred while creating the movie. Please try again.");
  }
};

export const updateMovie = async (movieId, formData) => {
  try {
    const response = await axios.put(`${BASE_URL}/movies/${movieId}`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al realizar la petición:', error);
    throw new Error("Error occurred while updating the movie. Please try again.");
  }
};

export const getAllMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movies`);
    // console.log(response); // DEBUG

    if (response.status === 200) return response.data.data;
    else return [];
  } catch (error) {
    console.log("Error:", error.message);
    return [];
  }
};

export const getOneMovie = async (movieId) => {
  try {
    if (!movieId) throw new Error("movieId is required!");

    const response = await axios.get(`${BASE_URL}/movies/${movieId}`);
    // console.log(response);

    if (response.status === 200) return response.data.data;
    else return undefined;
  } catch (error) {
    console.log("Error:", error.message);
    return undefined;
  }
};


export const toogleFavorite = async (movieId) => {
  try {
    if (!movieId) throw new Error("movieId is required!");

    const response = await axios.patch(
      `${BASE_URL}/movies/favorite/${movieId}`
    );
    // console.log(response);

    if (response.status === 200) return true;
    else return undefined;
  } catch (error) {
    console.log("Error:", error.message);
    return undefined;
  }
};

export const deleteOneMovie = async (movieId) => {
  try {
    if (!movieId) throw new Error("movieId is required!");

    const response = await axios.delete(
      `${BASE_URL}/movies/${movieId}`
    );
    // console.log(response);

    if (response.status === 200) return true;
    else return undefined;
  } catch (error) {
    console.log("Error:", error.message);
    return undefined;
  }
};