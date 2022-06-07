import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteTattooThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import { ITattoo } from "../../types/types";
import TattooAddedItemStyled from "./TattooAddedItemStyled";

const TattooAddedItem = ({
  tattoo: { _id, image, title },
}: {
  tattoo: ITattoo;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const deleteTattoo = () => {
    dispatch(deleteTattooThunk(_id));
  };

  return (
    <>
      <TattooAddedItemStyled>
        <img className="tattoo" src={image} alt={title} title={title} />
        <button className="delete-button" onClick={deleteTattoo}>
          DILIT
        </button>
      </TattooAddedItemStyled>
    </>
  );
};

export default TattooAddedItem;
