import AppStyled from "./AppStyled";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = (): JSX.Element => {
  return (
    <AppStyled className="App">
      <header>
        <h1 title="Tootattoo">
          <img src="./images/textLogo.svg" alt="Tootattoo logo" />
        </h1>
      </header>
      <NotFoundPage />
    </AppStyled>
  );
};

export default App;
