import LogInForm from "./components/LogInForm/LogInForm";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled />
      <div className="App">
        <h1 title="Tootattoo">
          <img src="" alt="Tootattoo logo" />
        </h1>
        <LogInForm />
      </div>
    </>
  );
};

export default App;
