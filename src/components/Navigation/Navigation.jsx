import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={s.container}>
      <ul className={s.list}>
        <li>
          <NavLink
            to="/"
            className={(params) => {
              return clsx(s.navLink, params.isActive && s.active);
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={(params) => {
              return clsx(s.navLink, params.isActive && s.active);
            }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
