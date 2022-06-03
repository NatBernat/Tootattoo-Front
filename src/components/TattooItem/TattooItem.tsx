import { ITattooCard } from "../../types/types";

const TattooItem = (tattoo: ITattooCard): JSX.Element => {
  return (
    <section>
      <img src={tattoo.image} alt={tattoo.title} />
    </section>
  );
};

export default TattooItem;
