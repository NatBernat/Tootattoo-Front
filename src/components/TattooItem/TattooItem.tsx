import { useNavigate } from "react-router-dom";
import { ITattoo } from "../../types/types";
import TattooItemStyled from "./TattooItemStyled";

const TattooItem = ({
  tattoo: { _id, image, imageBackup, title, creator },
}: {
  tattoo: ITattoo;
}): JSX.Element => {
  const navigate = useNavigate();
  const detailPage = () => {
    navigate(`/tattoo/${_id}`);
  };

  const onError = (error: any) => {
    (error.target as HTMLImageElement).src = imageBackup;
  };

  return (
    <TattooItemStyled onClick={detailPage}>
      <img
        className="tattoo"
        src={image}
        onError={onError}
        alt={title}
        title={title}
      />
      <p className="tattoo-creator">@{creator}</p>
    </TattooItemStyled>
  );
};

export default TattooItem;
