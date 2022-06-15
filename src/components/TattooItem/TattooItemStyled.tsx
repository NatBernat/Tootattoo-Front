import styled from "styled-components";

const TattooItemStyled = styled.li`
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
    height: 100%;
    transition: 0.5s all ease-in-out;
  }
  :hover img {
    transform: scale(1.1);
  }
  .tattoo-creator {
    position: absolute;
    bottom: 0;
    text-align: center;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    left: 0;
    right: 0;
    font-family: inherit;
    font-size: 1.1em;
  }
`;

export default TattooItemStyled;
