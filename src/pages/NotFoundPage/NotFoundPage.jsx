import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Error 404</h1>
      <p className={s.text}>
        Page is not found!!!{" "}
        <Link to="/" className={s.goBack}>
          {" "}
          Go back
        </Link>
      </p>
    </div>
  );
}
