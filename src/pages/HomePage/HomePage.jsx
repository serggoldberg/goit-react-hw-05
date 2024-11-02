import { useEffect, useState } from "react";
import { getTrendFilms } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Loader from "../../components/Loader/Loader";
import s from "./HomePage.module.css";

export default function HomePage() {
  const [trendFilms, setTrendFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetch() {
      try {
        setLoader(true);
        setError(false);
        const response = await getTrendFilms();
        setTrendFilms(response.results);
      } catch {
        setError(true);
        setTrendFilms([]);
      } finally {
        setLoader(false);
      }
    }
    fetch();
  }, []);

  return (
    <div className={s.container}>
      <h1>Trending Movies</h1>
      {loader && <Loader />}
      {trendFilms.length > 0 && !loader && !error && (
        <MovieList films={trendFilms} location={{ from: location }} />
      )}
      {error && <NotFoundPage />}
    </div>
  );
}
