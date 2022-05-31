import { createGlobalStyle } from "styled-components";

const AppStyled = createGlobalStyle`
    body{
      font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
      margin: 0;
      display: flex;
      justify-content: center;
      text-align: center;
      padding-top: 30px;
    }
 `;

export default AppStyled;
