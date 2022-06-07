import { useEffect } from "react";
import { ITattoo } from "../../types/types";
import TattooItem from "../../components/TattooItem/TattooItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadTattoosThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import FavouritesListPageStyled from "./FavouritesListPageStyled";

const FavouritesListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tattoos: ITattoo[] = useAppSelector((state) => state.tattoos);

  useEffect(() => {
    dispatch(loadTattoosThunk());
  }, [dispatch]);

  return (
    <FavouritesListPageStyled className="page">
      <h2 className="page-title">My favourite tattoos</h2>
      {tattoos.map((tattoo) => {
        return <TattooItem key={tattoo._id} tattoo={tattoo} />;
      })}
    </FavouritesListPageStyled>
  );
};

export default FavouritesListPage;
