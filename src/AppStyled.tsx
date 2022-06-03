import { createGlobalStyle } from "styled-components";

const AppStyled = createGlobalStyle`
    body{
      font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
      margin: 0;
    }
    h1 {
      display: flex;
      justify-content: center;
      img {
        width: 80vw;
        max-width: fit-content;
      }
    }
  `;

export default AppStyled;
