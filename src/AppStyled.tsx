import styled from "styled-components";

const AppStyled = styled.div`
  header * {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60vw;
      max-width: fit-content;
    }
  }
  .copyrigth {
    margin-top: 30px;
    font-size: 0.8em;
    text-align: center;
  }
`;

export default AppStyled;
