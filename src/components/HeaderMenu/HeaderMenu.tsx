import { useNavigate } from "react-router-dom";
import HeaderMenuStyled from "./HeaderMenuStyled";

const HeaderMenu = (): JSX.Element => {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };
  const redirectLogin = () => {
    navigate("/login");
  };

  return (
    <HeaderMenuStyled className="header">
      <h1 title="Tootattoo" className="logo" onClick={redirectHome}>
        <img src="./images/textLogo.svg" alt="Tootattoo logo" />
      </h1>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <p onClick={redirectLogin}>Account</p>
        </li>
        <li>
          <p>Uploads</p>
        </li>
        <li>
          <p>Favourites</p>
        </li>
      </ul>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
