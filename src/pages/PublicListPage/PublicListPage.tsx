import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import TattooItem from "../../components/TattooItem/TattooItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadTattoosThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import { ITattoo } from "../../types/types";

import PublicListPageStyled from "./PublicListPageStyled";

const PublicListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tattoos: ITattoo[] = useAppSelector((state) => state.tattoos);

  const loading = useAppSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(loadTattoosThunk());
  }, [dispatch]);

  return (
    <PublicListPageStyled className="page">
      {loading && <Loading />}
      {tattoos.map((tattoo) => {
        return <TattooItem key={tattoo._id} tattoo={tattoo} />;
      })}
    </PublicListPageStyled>
  );
};

export default PublicListPage;
