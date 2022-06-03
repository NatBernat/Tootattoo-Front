import { ITattoo } from "../../types/types";
import TattooItemStyled from "./TattooItemStyled";

const TattooItem = ({
  tattoo: { image, title },
}: {
  tattoo: ITattoo;
}): JSX.Element => {
  return (
    <TattooItemStyled>
      <img src={image} alt={title} title={title} />
    </TattooItemStyled>
  );
};

export default TattooItem;
