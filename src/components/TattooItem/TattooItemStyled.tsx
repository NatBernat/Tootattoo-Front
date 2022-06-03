import styled from "styled-components";

const TattooItemStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    cursor: zoom-in;
    object-fit: cover;
    border-radius: 3%;
  }
  img:hover {
    width: 210px;
    height: 210px;
  }
`;

export default TattooItemStyled;
