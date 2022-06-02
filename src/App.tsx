import AppStyled from "./AppStyled";
import Loading from "./components/Loading/Loading";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled />
      <div className="App">
        <h1 title="Tootattoo">
          <img src="./images/textLogo.png" alt="Tootattoo logo" />
        </h1>
        <Loading />
      </div>
    </>
  );
};

export default App;
