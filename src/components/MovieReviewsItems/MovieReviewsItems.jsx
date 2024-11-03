export default function ReviewItems({ review }) {
  const profileImage = "https://image.tmdb.org/t/p/w500";
  const defaultImage =
    "https://ih1.redbubble.net/image.533910704.5853/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg";

  return (
    <ul>
      {review.map(
        ({ id, author, content, author_details: { avatar_path, rating } }) => (
          <li key={id}>
            <img
              src={avatar_path ? `${profileImage}${avatar_path}` : defaultImage}
              alt=""
            />
            <p>{author}</p>
            <p>{content}</p>
            {rating && <p>{rating}</p>}
          </li>
        )
      )}
    </ul>
  );
}
