import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
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

  const dispatch: AppDispatch = useDispatch();

  const submitRegister = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const dispatchedData = { ...formData };

    resetForm();
    dispatch(registerUserThunk(dispatchedData));
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
        <p>Login</p>
      </form>
    </LoginFormStyled>
  );
};

export default RegisterForm;
