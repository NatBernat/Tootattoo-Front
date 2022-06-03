import TattooItem from "../../components/TattooItem/TattooItem";
import mockTattoos from "../../mocks/utils";
import PublicListPageStyled from "./PublicListPageStyled";

const tattoos = mockTattoos;

const PublicListPage = (): JSX.Element => {
  return (
    <PublicListPageStyled>
      {tattoos.map((tattoo) => {
        return <TattooItem tattoo={tattoo} />;
      })}
    </PublicListPageStyled>
  );
};

export default PublicListPage;
