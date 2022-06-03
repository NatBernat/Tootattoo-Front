import TattooItem from "../../components/TattooItem/TattooItem";
import { useAppSelector } from "../../redux/hooks/hooks";
import { ITattoo } from "../../types/types";

import PublicListPageStyled from "./PublicListPageStyled";

const PublicListPage = (): JSX.Element => {
  const tattoos: ITattoo[] = useAppSelector((state) => state.tattoos);

  return (
    <PublicListPageStyled>
      {tattoos.map((tattoo) => {
        return <TattooItem key={tattoo.id} tattoo={tattoo} />;
      })}
    </PublicListPageStyled>
  );
};

export default PublicListPage;
