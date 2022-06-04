import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ffbfbf;
  border-radius: 8px;
  img {
    height: 100px;
    width: auto;
  }
  * {
    margin: 0;
  }
`;

export default NotFoundPageStyled;
