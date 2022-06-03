import { ITattoo } from "../../types/types";
import TattooItemStyled from "./TattooItemStyled";

const TattooItem = ({ tattoo }: ITattoo): JSX.Element => {
  const { image, title } = tattoo;

  return (
    <TattooItemStyled>
      <img src={image} alt={title} title={title} />
    </TattooItemStyled>
  );
};

export default TattooItem;
