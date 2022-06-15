import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { deleteTattooThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import Loading from "../Loading/Loading";
import DetailTattooStyled from "./DetailTattooStyled";

const DetailTattoo = (): JSX.Element => {
  const logged = useAppSelector((state) => state.user.logged);
  const username = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { image, imageBackup, title, creator, creationDate, _id } =
    useAppSelector((state) => state.tattoo);

  const loading: boolean = useAppSelector((state) => state.ui.loading);

  const deleteButton = () => {
    dispatch(deleteTattooThunk(_id));
    navigate("/my-tattoos");
  };

  const editButton = () => {
    navigate(`/edit-tattoo/${_id}`);
  };

  const onError = (error: any) => {
    (error.target as HTMLImageElement).src = imageBackup;
  };

  return (
    <DetailTattooStyled>
      {loading && <Loading />}
      <img src={image} alt={title} onError={onError} />
      {logged && username === creator && (
        <div className="detail-buttons">
          <button onClick={deleteButton}>
            <img
              className="button__icon"
              src={process.env.REACT_APP_FRONT_URL + "./images/trash-icon.svg"}
              alt="delete tattoo"
              title="delete tattoo"
            />
          </button>
          <a href={imageBackup} download>
            <button>
              <img
                className="button__icon"
                src={
                  process.env.REACT_APP_FRONT_URL + "./images/arrow-icon.svg"
                }
                alt="download tattoo"
                title="download tattoo"
              />
            </button>
          </a>
          <button onClick={editButton}>
            <img
              className="button__icon"
              src={process.env.REACT_APP_FRONT_URL + "./images/list-icon.svg"}
              alt="edit tattoo"
              title="edit tattoo"
            />
          </button>
        </div>
      )}
      <ul className="details-list">
        <li>
          Creator: <span className="details-list__property">@{creator}</span>
        </li>
        <li>
          Creation date:{" "}
          <span className="details-list__property">{creationDate}</span>
        </li>
      </ul>
    </DetailTattooStyled>
  );
};

export default DetailTattoo;
