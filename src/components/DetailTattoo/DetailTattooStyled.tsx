import styled from "styled-components";

const DetailTattooStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: #fabfb7;
  img {
    object-fit: cover;
    max-width: 500px;
    max-height: 500px;
    width: 90vw;
    height: 90vw;
  }
  .detail-buttons {
    display: flex;
    justify-content: space-around;

    button {
      cursor: pointer;
      width: 75px;
      height: 75px;
      border: none;
      background-color: transparent;
      :hover {
        filter: invert(75%) sepia(50%) saturate(3000%) hue-rotate(310deg)
          brightness(100%) contrast(100%);
      }
      :active {
        filter: invert(100%);
      }
      .button__icon {
        width: 30px;
        height: 30px;
      }
    }
  }

  .details-list {
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }
  .details-list__property {
    font-weight: bold;
  }
`;

export default DetailTattooStyled;
