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
        <li>Tags : {tags}</li>
        <li>Creator: {creator}</li>
        <li>Creation date: {creationDate}</li>
      </ul>
    </DetailTattooStyled>
  );
};

export default DetailTattoo;
