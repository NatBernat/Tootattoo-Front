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
    height: 100%;
    transition: 0.5s all ease-in-out;
  }
  :hover img {
    transform: scale(1.1);
  }
  button {
    cursor: pointer;
    position: absolute;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    left: 0;
    right: 0;
    font-family: inherit;
    font-size: 1.1em;
    :hover {
      background-color: #fabfb77f;
      color: black;
      font-weight: bold;
    }
  }

  .edit-button {
    bottom: 0;
  }
  .delete-button {
    top: 0;
  }
`;

export default TattooAddedItemStyled;
