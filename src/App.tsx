import AppStyled from "./AppStyled";
import TattooItem from "./components/TattooItem/TattooItem";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled />
      <div className="App">
        <h1 title="Tootattoo">
          <img src="./images/textLogo.png" alt="Tootattoo logo" />
        </h1>
        <TattooItem
          title="test title"
          image="https://i.pinimg.com/564x/e8/f7/0c/e8f70c51540684a4daf881a0cb73ed42.jpg"
        />
      </div>
    </>
  );
};

export default App;
