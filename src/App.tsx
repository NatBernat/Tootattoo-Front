import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Loading from "./components/Loading/Loading";
import LoggedCheck from "./components/LoggedCheck/LoggedCheck";
import UnloggedCheck from "./components/UnloggedCheck/UnloggedCheck";
import AddedListPage from "./pages/AddedListPage/AddedListPage";
import FavouritesListPage from "./pages/FavouritesListPage/FavouritesListPage";
import LogInFormPage from "./pages/LogInFormPage/LogInFormPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PublicListPage from "./pages/PublicListPage/PublicListPage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import AddTattooFormPage from "./pages/AddTattooFormPage/AddTattooFormPage";
import { loginActionCreator } from "./redux/features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { ITokenInfo } from "./types/types";

import DetailPage from "./pages/DetailPage/DetailPage";
import EditTattooFormPage from "./pages/EditTattooFormPage/EditTattooFormPage";

const App = (): JSX.Element => {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      const userInfo: ITokenInfo = jwtDecode(token as string);
      dispatch(loginActionCreator(userInfo));
    } catch (error) {}
  });

  const loading: boolean = useAppSelector((state) => state.ui.loading);

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
        <Route path="/:id" element={<DetailPage />} />
        <Route
          path="/my-tattoos"
          element={
            <LoggedCheck>
              <AddedListPage />
            </LoggedCheck>
          }
        />
        <Route
          path="/my-favourites"
          element={
            <LoggedCheck>
              <FavouritesListPage />
            </LoggedCheck>
          }
        />
        <Route
          path="/tattoo-form"
          element={
            <LoggedCheck>
              <AddTattooFormPage />
            </LoggedCheck>
          }
        />
        <Route
          path="/edit-tattoo/:id"
          element={
            <LoggedCheck>
              <EditTattooFormPage />
            </LoggedCheck>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {loading && <Loading />}
    </AppStyled>
  );
};

export default App;
