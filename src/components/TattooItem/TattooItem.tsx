import { useNavigate } from "react-router-dom";
import { ITattoo } from "../../types/types";
import TattooItemStyled from "./TattooItemStyled";

const TattooItem = ({
  tattoo: { _id, imageBackup, title, creator },
}: {
  tattoo: ITattoo;
}): JSX.Element => {
  const navigate = useNavigate();
  const detailPage = () => {
    navigate(`/tattoo/${_id}`);
  };
  return (
    <>
      <TattooItemStyled onClick={detailPage}>
        <img className="tattoo" src={imageBackup} alt={title} title={title} />
        <p className="tattoo-creator">@{creator}</p>
      </TattooItemStyled>
    </>
  );
};

export default TattooItem;
