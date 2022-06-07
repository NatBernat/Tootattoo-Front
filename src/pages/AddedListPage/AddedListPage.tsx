import { useEffect } from "react";
import { ITattoo } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadTattoosThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import AddedListPageStyled from "./AddedListPageStyled";
import TattooAddedItem from "../../components/TattooAddedItem/TattooAddedItem";

const AddedListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tattoos: ITattoo[] = useAppSelector((state) => state.tattoos);

  useEffect(() => {
    dispatch(loadTattoosThunk());
  }, [dispatch]);

  return (
    <AddedListPageStyled className="page">
      <h2 className="page-title">My tattoos</h2>
      {tattoos.map((tattoo) => {
        return <TattooAddedItem key={tattoo._id} tattoo={tattoo} />;
      })}
    </AddedListPageStyled>
  );
};

export default AddedListPage;
