import jwtDecode from "jwt-decode";
import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import LoggedCheck from "./components/LoggedCheck/LoggedCheck";
import UnloggedCheck from "./components/UnloggedCheck/UnloggedCheck";
import AddedListPage from "./pages/AddedListPage/AddedListPage";
import FavouritesListPage from "./pages/FavouritesListPage/FavouritesListPage";
import LogInFormPage from "./pages/LogInFormPage/LogInFormPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PublicListPage from "./pages/PublicListPage/PublicListPage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import { loginActionCreator } from "./redux/features/userSlice/userSlice";
import { useAppDispatch } from "./redux/hooks/hooks";
import { ITokenInfo } from "./types/types";

const App = (): JSX.Element => {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  try {
    const userInfo: ITokenInfo = jwtDecode(token as string);
    dispatch(loginActionCreator(userInfo));
  } catch (error) {}

  return (
    <AppStyled className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<Navigate to="/public-list" />} />
        <Route path="/public-list" element={<PublicListPage />} />
        <Route
          path="/login"
          element={
            <UnloggedCheck>
              <LogInFormPage />
            </UnloggedCheck>
          }
        />
        <Route
          path="/register"
          element={
            <UnloggedCheck>
              <RegisterFormPage />
            </UnloggedCheck>
          }
        />
        <Route
          path="/mytattoos"
          element={
            <LoggedCheck>
              <AddedListPage />
            </LoggedCheck>
          }
        />
        <Route
          path="/myfavourites"
          element={
            <LoggedCheck>
              <FavouritesListPage />
            </LoggedCheck>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <p className="copyrigth">© 2022 Tootattoo.</p>
    </AppStyled>
  );
};

export default App;
