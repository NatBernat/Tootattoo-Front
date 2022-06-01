import AppStyled from "./AppStyled";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled />
      <div className="App">
        <h1 title="Tootattoo">
          <img src="" alt="Tootattoo logo" />
        </h1>
        <RegisterForm />
      </div>
    </>
  );
};

export default App;
