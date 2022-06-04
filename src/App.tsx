import AppStyled from "./AppStyled";
import LogInFormPage from "./pages/LogInFormPage/LogInFormPage";

const App = (): JSX.Element => {
  return (
    <AppStyled className="App">
      <header>
        <h1 title="Tootattoo">
          <img src="./images/textLogo.svg" alt="Tootattoo logo" />
        </h1>
      </header>
      <LogInFormPage />
      <p className="copyrigth">© 2022 Tootattoo.</p>
    </AppStyled>
  );
};

export default App;
