import styled from "styled-components";

const LoginFormStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffbfbf;
  padding: 20px;
  margin-top: 40px;
  border-radius: 8px;
  font-size: 1.5em;
  margin: 10px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin: 2px;
    width: 100%;
  }

  input {
    border-radius: 25px;
    border-width: 0;
    margin: 5px;
    height: 30px;
    width: 90%;
    padding: 10px;
    text-align: center;
    font-size: 0.8em;
  }

  button {
    border-width: 0;
    border-radius: 25px;
    margin: 10px;
    width: 60%;
    height: 50px;
    padding: 6px;
    color: white;
    background-color: #1b1b1e;
    cursor: pointer;
    font-size: 0.8em;
  }

  p {
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    color: #1b1b1e;
    font-size: 0.8em;
  }
`;

export default LoginFormStyled;
