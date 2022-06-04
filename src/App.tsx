import AppStyled from "./AppStyled";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";

const App = (): JSX.Element => {
  return (
    <AppStyled className="App">
      <header>
        <h1 title="Tootattoo">
          <img src="./images/textLogo.svg" alt="Tootattoo logo" />
        </h1>
      </header>
      <RegisterFormPage />
      <p className="copyrigth">© 2022 Tootattoo.</p>
    </AppStyled>
  );
};

export default App;
