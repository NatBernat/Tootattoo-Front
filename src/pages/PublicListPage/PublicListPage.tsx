import { useEffect } from "react";
import TattooItem from "../../components/TattooItem/TattooItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadTattoosThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import { ITattoo } from "../../types/types";

import PublicListPageStyled from "./PublicListPageStyled";

const PublicListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadTattoosThunk());
  }, [dispatch]);

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
