import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getTattooByIdThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";

const DetailPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const tattooById = useAppSelector((state) => state.tattoo);

  useEffect(() => {
    dispatch(getTattooByIdThunk(id as string));
    console.log(tattooById);
  }, [dispatch, id, tattooById]);

  return (
    <div>
      {tattooById.title !== "" && (
        <>
          <img src={tattooById.image} alt={tattooById.title} />
          <p>Title: {tattooById.title}</p>
          <p>Tags : {tattooById.tags}</p>
          <p>Creator: {tattooById.creator}</p>
          <p>Creation date: {tattooById.creationDate}</p>
        </>
      )}
    </div>
  );
};

export default DetailPage;
