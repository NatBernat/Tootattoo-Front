import { Link } from "react-router-dom";
import HeaderMenuStyled from "./HeaderMenuStyled";

const HeaderMenu = (): JSX.Element => {
  return (
    <HeaderMenuStyled className="header">
      <Link to="/">
        <h1 title="Tootattoo" className="logo">
          <img src="./images/textLogo.svg" alt="Tootattoo logo" />
        </h1>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="/login" className="header-link">
            <p>Account</p>
          </Link>
        </li>
        <li>
          <Link to="/favourites" className="header-link">
            <p>Favourites</p>
          </Link>
        </li>
        <li>
          <Link to="/uploads" className="header-link">
            <p>Uploads</p>
          </Link>
        </li>
      </ul>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
