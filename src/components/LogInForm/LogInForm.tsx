import { ChangeEvent, useState } from "react";
import LogInFormStyled from "./LogInFormStyled";

const LogInForm = (): JSX.Element => {
  interface ILogInForm {
    username: string;
    password: string;
  }

  const formInitialState: ILogInForm = { username: "", password: "" };

  const [formData, setFormData] = useState<ILogInForm>(formInitialState);

  const changeFormData = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(formInitialState);
  };

  const submitLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();

    resetForm();
  };

  return (
    <LogInFormStyled>
      <form noValidate autoComplete="off" onSubmit={submitLogin}>
        <label htmlFor="username"> Username </label>
        <input
          id="username"
          value={formData.username}
          onChange={changeFormData}
        />
        <label htmlFor="password"> Password </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeFormData}
        />
        <button type="submit">Log In</button>
        <p>Register</p>
      </form>
    </LogInFormStyled>
  );
};

export default LogInForm;
