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
    <>
      <h2 className="page-title">My tattoos</h2>
      <AddedListPageStyled className="page">
        {tattoos.map((tattoo) => {
          return <TattooAddedItem key={tattoo._id} tattoo={tattoo} />;
        })}
      </AddedListPageStyled>
    </>
  );
};

export default AddedListPage;
