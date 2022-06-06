import { Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";

import LogInFormPage from "./pages/LogInFormPage/LogInFormPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PublicListPage from "./pages/PublicListPage/PublicListPage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";

const App = (): JSX.Element => {
  return (
    <AppStyled className="App">
      <HeaderMenu />
      {/* <h1 title="Tootattoo">
        <img src="./images/textLogo.svg" alt="Tootattoo logo" />
      </h1> */}
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
