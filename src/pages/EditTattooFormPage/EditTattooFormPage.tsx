import { useParams } from "react-router-dom";
import { getTattooByIdThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import TattooForm from "../../components/TattooForm/TattooForm";
import AddTattooFormPageStyled from "../AddTattooFormPage/AddTattooFormPageStyled";
import { AppDispatch } from "../../redux/store/store";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useEffect } from "react";

const EditTattooFormPage = (): JSX.Element => {
  const dispatch: AppDispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getTattooByIdThunk(id as string));
  }, [dispatch, id]);
  const tattoo = useAppSelector((state) => state.tattoo);

  return (
    <AddTattooFormPageStyled className="page">
      <h2 className="page-title">Edit tattoo:</h2>
      <TattooForm tattoo={tattoo} />
    </AddTattooFormPageStyled>
  );
};

export default EditTattooFormPage;
