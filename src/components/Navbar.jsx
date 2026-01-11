import { NavLink } from "react-router-dom";
import BookIcon from "../assets/book-16.svg";
import RepoIcon from "../assets/repo-16.svg";
import ProjectIcon from "../assets/table-16.svg";
import PackageIcon from "../assets/package-16.svg";
import StarIcon from "../assets/star-16.svg";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}
          >
            <img src={BookIcon} />
            <strong>Overview</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/repositories'
            className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}
          >
            <img src={RepoIcon} />
            <strong>Repositories { }</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/projects'
            className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}
          >
            <img src={ProjectIcon} />
            <strong>Projects</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/packages'
            className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}
          >
            <img src={PackageIcon} />
            <strong>Packages</strong>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/stars'
            className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}
          >
            <img src={StarIcon} />
            <strong>Stars</strong>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;