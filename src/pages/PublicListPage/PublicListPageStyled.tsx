import styled from "styled-components";

const PublicListPageStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  padding: 0px;

  .greeting {
    display: flex;
    width: 100vw;
    justify-content: center;
    margin: 70px 0 0 0;
    padding: 0;
  }
`;

export default PublicListPageStyled;
