import LogInForm from "../../components/LogInForm/LogInForm";
import LogInFormPageStyled from "./LogInFormPageStyled";

const LogInFormPage = (): JSX.Element => {
  return (
    <LogInFormPageStyled>
      <h2 className="page-title">Log into TooTattoo:</h2>
      <LogInForm />
    </LogInFormPageStyled>
  );
};

export default LogInFormPage;
