import HeaderMenuStyled from "./HeaderMenuStyled";

const HeaderMenu = (): JSX.Element => {
  return (
    <HeaderMenuStyled className="header">
      <p className="logo">TOOTATTOO</p>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <p>Account</p>
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
