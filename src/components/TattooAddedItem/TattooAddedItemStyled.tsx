import styled from "styled-components";

const TattooAddedItemStyled = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 30vw;
  min-width: 250px;
  min-height: 250px;
  cursor: pointer;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    transition: 0.5s all ease-in-out;
  }
  :hover img {
    transform: scale(1.1);
  }
  .delete-button {
    position: absolute;
  }
`;

export default TattooAddedItemStyled;
