import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieCreate from "./pages/MovieCreate";
import MovieInformation from "./pages/MovieInformation";
import MovieModify from "./pages/MovieModify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-movie" element={<MovieCreate />} />
      <Route path="/movie/:movieId" element={<MovieInformation />} />
      <Route path="/modify-movie/:movieId" element={<MovieModify />} />
      <Route path="*" element={<h1>Route not found</h1>} />
    </Routes>
  );
}

export default App;
