import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { logOutUserThunk } from "../../redux/thunks/userThunks/userThunks";
import HeaderMenuStyled from "./HeaderMenuStyled";

const HeaderMenu = (): JSX.Element => {
  const logged = useAppSelector((state) => state.user.logged);

  const dispatch = useAppDispatch();

  const logOutUser = () => {
    dispatch(logOutUserThunk());
  };

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
        {logged ? (
          <>
            <li>
              <Link to="/myfavourites" className="header-link">
                <p>Favourites</p>
              </Link>
            </li>
            <li>
              <Link to="/mytattoos" className="header-link">
                <p>My tattoos</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="header-link" onClick={logOutUser}>
                <p>Log out</p>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="header-link">
              <p>Log in</p>
            </Link>
          </li>
        )}
      </ul>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
