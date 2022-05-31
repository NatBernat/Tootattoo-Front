import LogInFormStyled from "./LogInFormStyled";

const LogInForm = () => {
  const submitLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <LogInFormStyled>
      <form noValidate autoComplete="off" onSubmit={submitLogin}>
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
