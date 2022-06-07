import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Loading from "./components/Loading/Loading";
import LoggedCheck from "./components/LoggedCheck";
import AddedListPage from "./pages/AddedListPage/AddedListPage";
import LogInFormPage from "./pages/LogInFormPage/LogInFormPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PublicListPage from "./pages/PublicListPage/PublicListPage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import {
  loginActionCreator,
  logoutActionCreator,
} from "./redux/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { loadTattoosThunk } from "./redux/thunks/tattoosThunks/tattoosThunks";
import { ITokenInfo } from "./types/types";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const logged = useAppSelector((state) => state.user.logged);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (logged && token) {
      const userInfo: ITokenInfo = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    } else {
      dispatch(logoutActionCreator());
      dispatch(loadTattoosThunk());
    }
  }, [dispatch, logged, token]);

  const loading: boolean = useAppSelector((state) => state.ui.loading);
  return (
    <AppStyled className="App">
      <HeaderMenu />
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<PublicListPage />} />
        <Route path="/login" element={<LogInFormPage />} />
        <Route path="/register" element={<RegisterFormPage />} />
        <Route
          path="/mytattoos"
          element={
            <LoggedCheck>
              <AddedListPage />
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
