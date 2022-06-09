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
    transition: 0.5s all ease-in-out;
  }
  :hover img {
    transform: scale(1.1);
  }
  .tattoo-creator {
    position: absolute;
    display: none;
  }
  img:hover + .tattoo-creator {
    display: block;
    font-weight: bold;
    font-size: 1.2em;
    color: white;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  }
`;

export default TattooItemStyled;
