import LogInFormStyled from "./LogInFormStyled";

const LogInForm = () => {
  return (
    <LogInFormStyled>
      <form noValidate autoComplete="off">
        <label htmlFor="username"> Username </label>
        <input id="username" />
        <label htmlFor="password"> Password </label>
        <input id="password" type="password" />
        <button type="submit">Log In</button>
        <p>Register</p>
      </form>
    </LogInFormStyled>
  );
};

export default LogInForm;
