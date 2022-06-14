import { useEffect } from "react";
import { ITattoo } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadTattoosByUserThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import AddedListPageStyled from "./AddedListPageStyled";
import TattooAddedItem from "../../components/TattooAddedItem/TattooAddedItem";

const AddedListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tattoos: ITattoo[] = useAppSelector((state) => state.tattoos);

  useEffect(() => {
    dispatch(loadTattoosByUserThunk());
  }, [dispatch]);

  return (
    <>
      <h2 className="page-title">My tattoos</h2>
      <AddedListPageStyled>
        <ul className="page">
          {tattoos.map((tattoo) => {
            return <TattooAddedItem key={tattoo._id} tattoo={tattoo} />;
          })}
        </ul>
      </AddedListPageStyled>
    </>
  );
};

export default AddedListPage;
