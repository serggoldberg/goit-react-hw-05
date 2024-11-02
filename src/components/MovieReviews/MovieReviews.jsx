import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmReviews } from "../../api";
import ReviewItems from "../MovieReviewsItem/MovieReviewsItems";

export default function MovieReviews() {
  const { filmId } = useParams();
  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    if (!filmId) return;
    async function fetchReviews() {
      const getReviews = await getFilmReviews(filmId);
      setFilmReviews(getReviews.results);
    }
    fetchReviews();
  }, [filmId]);

  return (
    <div>
      {filmReviews.length !== 0 && <ReviewItems review={filmReviews} />}
      {filmReviews.length === 0 && (
        <p>There are no reviews about this film yet</p>
      )}
    </div>
  );
}
