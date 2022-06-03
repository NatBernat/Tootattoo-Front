import { ITattooCard } from "../../types/types";
import TattooItemStyled from "./TattooItemStyled";

const TattooItem = (tattoo: ITattooCard): JSX.Element => {
  return (
    <TattooItemStyled>
      <img src={tattoo.image} alt={tattoo.title} title={tattoo.title} />
    </TattooItemStyled>
  );
};

export default TattooItem;
