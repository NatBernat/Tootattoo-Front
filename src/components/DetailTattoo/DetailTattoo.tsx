import { ITattoo } from "../../types/types";
import DetailTattooStyled from "./DetailTattooStyled";

const DetailTattoo = ({
  tattoo: { image, title, tags, creator, creationDate },
}: {
  tattoo: ITattoo;
}): JSX.Element => {
  return (
    <DetailTattooStyled>
      <img src={`${process.env.REACT_APP_IMAGE_URL}${image}`} alt={title} />
      <ul className="details-list">
        <li>
          Tags : <span className="details-list__property">{tags}</span>
        </li>
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
