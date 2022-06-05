import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { AppDispatch } from "../../redux/store/store";
import { registerUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { IRegisterInfo } from "../../types/types";
import LoginFormStyled from "../LogInForm/LogInFormStyled";

const RegisterForm = (): JSX.Element => {
  const formInitialState: IRegisterInfo = {
    username: "",
    password: "",
    fullname: "",
    email: "",
  };

  const [formData, setFormData] = useState<IRegisterInfo>(formInitialState);

  const changeFormData = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(formInitialState);
  };

  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  };

  const dispatch: AppDispatch = useAppDispatch();

  const submitRegister = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const dispatchedData = { ...formData };

    resetForm();
    dispatch(registerUserThunk(dispatchedData));
    redirectLogin();
  };
  return (
    <LoginFormStyled>
      <form noValidate autoComplete="off" onSubmit={submitRegister}>
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
        <label htmlFor="fullname"> Full name </label>
        <input
          id="fullname"
          value={formData.fullname}
          onChange={changeFormData}
        />
        <label htmlFor="email"> E-mail </label>
        <input id="email" value={formData.email} onChange={changeFormData} />

        <button type="submit">Register</button>
      </form>
      <button className="login-button" onClick={redirectLogin}>
        Login
      </button>
    </LoginFormStyled>
  );
};

export default RegisterForm;
