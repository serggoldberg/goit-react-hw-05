import { Link } from "react-router-dom";

export default function MovieList({ films, location }) {
  return (
    <div>
      <ul>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
