export default function MovieCastItem({ cast }) {
  const defaultImage =
    "https://ih1.redbubble.net/image.533910704.5853/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg";
  const profileImage = "https://image.tmdb.org/t/p/w500";

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path, gender }) => (
        <li key={id}>
          <img
            src={
              profile_path !== null
                ? `${profileImage}${profile_path}`
                : defaultImage
            }
            alt={character}
          />
          <p>{name}</p>
          {character !== "" && <p>{character}</p>}
        </li>
      ))}
    </ul>
  );
}
