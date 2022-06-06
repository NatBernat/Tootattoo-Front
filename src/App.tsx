import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import LogInFormPage from "./pages/LogInFormPage/LogInFormPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PublicListPage from "./pages/PublicListPage/PublicListPage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import { loginActionCreator } from "./redux/features/userSlice/userSlice";
import { useAppDispatch } from "./redux/hooks/hooks";
import { ITokenInfo } from "./types/types";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo: ITokenInfo = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    }
  }, [dispatch]);
  return (
    <AppStyled className="App">
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<PublicListPage />} />
        <Route path="/login" element={<LogInFormPage />} />
        <Route path="/register" element={<RegisterFormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <p className="copyrigth">© 2022 Tootattoo.</p>
    </AppStyled>
  );
};

export default App;
