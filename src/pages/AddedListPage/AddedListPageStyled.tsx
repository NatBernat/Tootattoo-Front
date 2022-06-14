import styled from "styled-components";

const AddedListPageStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding: 0px;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    gap: 50px;
    button {
      font-family: inherit;
      background-color: #fabfb7;
      padding: 10px 20px 5px;
      border: none;
      box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
      margin: 10px 0 25px;

      img {
        width: 30px;
        height: 30px;
      }
      .button__icon--back {
        transform: rotate(90deg);
      }
      .button__icon--next {
        transform: rotate(270deg);
      }

      :hover {
        background-color: #b0b0b0;
      }
      :active {
        filter: invert(100%);
      }
    }
  }
`;

export default AddedListPageStyled;
