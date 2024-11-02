import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCastItems from "../MovieCastItem/MovieCastItems";
import { getCastList } from "../../api";

export default function MovieCast() {
  const { filmId } = useParams();
  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    if (!filmId) return;
    async function getCast() {
      const fetchCastList = await getCastList(filmId);
      setFilmCast(fetchCastList.cast);
    }
    getCast();
  }, [filmId]);

  return (
    <div>
      {filmCast.length !== 0 && <MovieCastItems cast={filmCast} />}
      {filmCast.length === 0 && (
        <p>There is not any information about the film cast!</p>
      )}
    </div>
  );
}
