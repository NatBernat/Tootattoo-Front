import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { AppDispatch } from "../../redux/store/store";
import { loginUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { ILogInForm } from "../../types/types";
import LogInFormStyled from "./LogInFormStyled";

const LogInForm = (): JSX.Element => {
  const formInitialState: ILogInForm = { username: "", password: "" };

  const [formData, setFormData] = useState<ILogInForm>(formInitialState);

  const changeFormData = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(formInitialState);
  };

  const navigate = useNavigate();
  const redirectRegister = () => {
    navigate("/register");
  };

  const dispatch: AppDispatch = useAppDispatch();
  const submitLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const dispatchedData = { ...formData };
    resetForm();

    dispatch(loginUserThunk(dispatchedData));
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
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
      </form>
      <button className="register-button" onClick={redirectRegister}>
        Register
      </button>
    </LogInFormStyled>
  );
};

export default LogInForm;
