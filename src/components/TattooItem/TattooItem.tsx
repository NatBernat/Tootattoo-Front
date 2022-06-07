import { ITattoo } from "../../types/types";
import TattooItemStyled from "./TattooItemStyled";

const TattooItem = ({
  tattoo: { _id, image, title },
}: {
  tattoo: ITattoo;
}): JSX.Element => {
  return (
    <>
      <TattooItemStyled>
        <img className="tattoo" src={image} alt={title} title={title} />
      </TattooItemStyled>
    </>
  );
};

export default TattooItem;
