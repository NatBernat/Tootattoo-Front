import { useNavigate } from "react-router-dom";
import { ITattoo } from "../../types/types";
import TattooItemStyled from "./TattooItemStyled";

const TattooItem = ({
  tattoo: { _id, image, title, creator },
}: {
  tattoo: ITattoo;
}): JSX.Element => {
  const navigate = useNavigate();
  const detailPage = () => {
    navigate(`/${_id}`);
  };
  return (
    <>
      <TattooItemStyled onClick={detailPage}>
        <img
          className="tattoo"
          src={`${process.env.REACT_APP_IMAGE_URL}${image}`}
          alt={title}
          title={title}
        />
        <p className="tattoo-creator">@{creator}</p>
      </TattooItemStyled>
    </>
  );
};

export default TattooItem;
