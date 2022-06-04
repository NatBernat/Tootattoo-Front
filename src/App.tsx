import AppStyled from "./AppStyled";
import PublicListPage from "./pages/PublicListPage/PublicListPage";

const App = (): JSX.Element => {
  return (
    <AppStyled className="App">
      <header>
        <h1 title="Tootattoo">
          <img src="./images/textLogo.svg" alt="Tootattoo logo" />
        </h1>
      </header>
      <PublicListPage />
      <p className="copyrigth">© 2022 Tootattoo.</p>
    </AppStyled>
  );
};

export default App;
