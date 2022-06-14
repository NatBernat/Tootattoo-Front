import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutActionCreator } from "../../redux/features/userSlice/userSlice";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import HeaderMenuStyled from "./HeaderMenuStyled";

const HeaderMenu = (): JSX.Element => {
  const logged = useAppSelector((state) => state.user.logged);

  const checkBox = document.getElementById(
    "menu-btn"
  ) as HTMLInputElement | null;
  const closeMenu = () => {
    if (checkBox?.checked) {
      checkBox.click();
    }
  };

  const dispatch = useAppDispatch();
  const logOutUser = () => {
    closeMenu();
    localStorage.removeItem("token");
    toast.success("Logged out");
    dispatch(logoutActionCreator());
  };

  return (
    <HeaderMenuStyled className="header">
      <Link to="/" onClick={closeMenu}>
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
              <Link to="/" className="header-link" onClick={closeMenu}>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                to="/my-tattoos"
                className="header-link"
                onClick={closeMenu}
              >
                <p>My tattoos</p>
              </Link>
            </li>
            <li>
              <Link
                to="/tattoo-form"
                className="header-link"
                onClick={closeMenu}
              >
                <p>Add a tattoo</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="header-link header-link__log-button">
                <p onClick={logOutUser}>Log out</p>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="header-link" onClick={closeMenu}>
              <p>Log in</p>
            </Link>
          </li>
        )}
      </ul>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
