import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LogInFormPageStyled from "../LogInFormPage/LogInFormPageStyled";

const RegisterFormPage = (): JSX.Element => {
  return (
    <LogInFormPageStyled>
      <h2 className="page-title">Register on Tootattoo:</h2>
      <RegisterForm />
    </LogInFormPageStyled>
  );
};

export default RegisterFormPage;
