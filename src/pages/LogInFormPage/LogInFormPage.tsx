import LogInForm from "../../components/LogInForm/LogInForm";
import LogInFormPageStyled from "./LogInFormPageStyled";

const LogInFormPage = (): JSX.Element => {
  return (
    <LogInFormPageStyled className="page">
      <h2 className="page-title">Log into Tootattoo:</h2>
      <LogInForm />
    </LogInFormPageStyled>
  );
};

export default LogInFormPage;
