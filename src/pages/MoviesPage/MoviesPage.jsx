import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getFilmByKeyword } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useLocation, useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const getQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(getQuery);

  const location = useLocation();

  const notifyNotFoundFilms = () =>
    toast("There is any films for your request");

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function fetch() {
      try {
        setLoader(true);
        setError(false);
        const response = await getFilmByKeyword(query);
        if (response.total_results === 0) {
          return notifyNotFoundFilms();
        } else {
          setMovies(response.results);
        }
      } catch {
        setMovies([]);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetch(query);
  }, [query]);

  const handleSearch = async (query) => {
    setQuery(query);
    setMovies([]);
    setSearchParams({ query: query });
  };

  return (
    <div className={s.container}>
      <SearchBar onSubmit={handleSearch} />
      {loader && <Loader />}
      {movies.length > 0 && !error && (
        <MovieList films={movies} location={{ from: location }} />
      )}
      {error && <NotFoundPage />}
    </div>
  );
}
