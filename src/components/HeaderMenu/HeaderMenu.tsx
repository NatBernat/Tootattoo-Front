import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderMenuStyled from "./HeaderMenuStyled";

const HeaderMenu = (): JSX.Element => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  return (
    <HeaderMenuStyled className="header">
      <Link to="/" onClick={handleClick}>
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
          <Link to="/login">
            <p>Account</p>
          </Link>
        </li>
        <li>
          <Link to="/favourites">
            <p>Favourites</p>
          </Link>
        </li>
        <li>
          <Link to="/uploads">
            <p>Uploads</p>
          </Link>
        </li>
      </ul>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
