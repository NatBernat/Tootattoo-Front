import styled from "styled-components";

const LoginFormStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: #09af49;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  margin: 0 auto;
  width: fit-content;
  font-size: 1.2em;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 2px;
    width: 100%;
  }

  input {
    border-radius: 8px;
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
    border-radius: 8px;
    margin: 10px;
    width: 60%;
    height: 50px;
    padding: 6px;
    color: white;
    background-color: #055a25;
    cursor: pointer;
    font-size: 0.8em;
  }

  button:hover {
    background-color: #023315;
  }

  button:active {
    background-color: #000201;
  }

  p {
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    color: #1b1b1e;
    font-size: 0.8em;
  }
  p:active {
    color: #055a25;
  }
`;

export default LoginFormStyled;
