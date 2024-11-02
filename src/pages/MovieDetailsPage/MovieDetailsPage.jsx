import { useEffect, useState, useRef } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getFilmsById } from "/src/api.js";

export default function MovieDetailsPage() {
  const { filmId } = useParams();
  const [film, setFilm] = useState({});

  const location = useLocation();
  const goBack = useRef(location.state?.from ?? "/");

  useEffect(() => {
    async function fetchArticles() {
      const fetch = await getFilmsById(filmId);
      setFilm(fetch);
    }
    fetchArticles();
  }, [filmId]);

  const {
    title,
    tagline,
    overview,
    poster_path,
    genres,
    vote_average,
    release_date,
  } = film;

  const filmImage = "https://image.tmdb.org/t/p/w500";
  const defaultImage =
    "https://ih1.redbubble.net/image.533910704.5853/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg";

  return (
    <div>
      <Link to={goBack.current}>Go back</Link>
      <div>
        <img
          src={
            poster_path !== null ? `${filmImage}${poster_path}` : defaultImage
          }
        />
        <div>
          <div>
            <h2>{title}</h2>
            {genres && genres.length !== 0 && (
              <ul>
                Genres:{" "}
                {genres &&
                  genres.map(({ id, name }) => <li key={id}>{name}</li>)}
              </ul>
            )}
            {tagline !== "" && (
              <h3>
                Tagline: <p>{tagline}</p>
              </h3>
            )}
            {overview !== "" && (
              <h3>
                Overview: <p>{overview}</p>
              </h3>
            )}
            {vote_average !== null && (
              <h3>
                <p>Vote average: {vote_average}</p>
              </h3>
            )}
            {release_date !== "" && (
              <h3>
                <p>Release date: {release_date}</p>
              </h3>
            )}
          </div>
          <div>
            <div>
              <NavLink to={`reviews`}>Reviews</NavLink>
              <NavLink to={`cast`}>Cast</NavLink>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
