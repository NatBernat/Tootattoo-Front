import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteTattooThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import { ITattoo } from "../../types/types";
import TattooAddedItemStyled from "./TattooAddedItemStyled";

const TattooAddedItem = ({
  tattoo: { _id, imageBackup, title },
}: {
  tattoo: ITattoo;
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const deleteTattoo = () => {
    dispatch(deleteTattooThunk(_id));
  };

  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/tattoo/${_id}`);
  };

  const editTattoo = () => {
    navigate(`/edit-tattoo/${_id}`);
  };

  return (
    <>
      <TattooAddedItemStyled>
        <img
          className="tattoo"
          src={imageBackup}
          alt={title}
          title={title}
          onClick={navigateToDetail}
        />
        <button className="delete-button" onClick={deleteTattoo}>
          DELETE
        </button>
        <button className="edit-button" onClick={editTattoo}>
          EDIT
        </button>
      </TattooAddedItemStyled>
    </>
  );
};

export default TattooAddedItem;
