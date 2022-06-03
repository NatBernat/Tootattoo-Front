import TattooItem from "../../components/TattooItem/TattooItem";
import { ITattooDetail } from "../../types/types";
import PublicListPageStyled from "./PublicListPageStyled";

const PublicListPage = (): JSX.Element => {
  const mockTattoos: ITattooDetail[] = [
    {
      id: "1a1b1c",
      title: "Arm abstract fluid forms",
      image:
        "https://i.pinimg.com/564x/e8/f7/0c/e8f70c51540684a4daf881a0cb73ed42.jpg",
      creator: "6295aacd280fd64f7583019f",
      creationDate: "2022-06-02",
      tags: ["small", "blackwork", "b/n", "photo"],
    },
    {
      id: "2a2b2c",
      title: "Colored realistic flowers",
      image: "https://pbs.twimg.com/media/FTW9Z45aAAAz67v?format=jpg",
      creator: "6295aacd280fd64f7583019f",
      creationDate: "2022-06-02",
      tags: ["medium", "traditional", "color", "photo"],
    },
  ];

  return (
    <PublicListPageStyled>
      {mockTattoos.map((tattoo) => {
        return <TattooItem image={tattoo.image} title={tattoo.title} />;
      })}
    </PublicListPageStyled>
  );
};

export default PublicListPage;
