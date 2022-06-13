import styled from "styled-components";

const DetailTattooStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  img {
    object-fit: cover;
    max-width: 500px;
    max-height: 500px;
    width: 90vw;
    height: 90vw;
  }
  .details-list {
    background-color: #fabfb7;
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
  }
  .details-list__property {
    font-weight: bold;
  }
`;

export default DetailTattooStyled;
