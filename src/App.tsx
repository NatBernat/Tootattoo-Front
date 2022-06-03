import AppStyled from "./AppStyled";
import PublicListPage from "./pages/PublicListPage/PublicListPage";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled />
      <div className="App">
        <header>
          <h1 title="Tootattoo">
            <img src="./images/textLogo.png" alt="Tootattoo logo" />
          </h1>
        </header>
        <PublicListPage />
      </div>
    </>
  );
};

export default App;
