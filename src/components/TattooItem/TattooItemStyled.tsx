import styled from "styled-components";

const TattooItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    cursor: pointer;
    object-fit: cover;
    border-radius: 3%;
  }
  img:hover {
    filter: blur(1px);
  }

  img:active {
    opacity: 0.75;
  }
`;

export default TattooItemStyled;
