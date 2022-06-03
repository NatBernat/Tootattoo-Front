import { ITattooCard } from "../../types/types";
import TattooItemStyled from "./TattooItemStyled";

const TattooItem = ({ image, title }: ITattooCard): JSX.Element => {
  return (
    <TattooItemStyled>
      <img src={image} alt={title} title={title} />
    </TattooItemStyled>
  );
};

export default TattooItem;
