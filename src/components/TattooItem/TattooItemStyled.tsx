import styled from "styled-components";

const TattooItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 90vw;
  max-width: 300px;
  max-height: 300px;
  border-radius: 8px;
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
`;

export default TattooItemStyled;
