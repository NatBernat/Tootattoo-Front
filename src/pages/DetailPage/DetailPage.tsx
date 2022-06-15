import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailTattoo from "../../components/DetailTattoo/DetailTattoo";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getTattooByIdThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTattooByIdThunk(id as string));
  }, [dispatch, id]);

  const tattooById = useAppSelector((state) => state.tattoo);

  return (
    <div>
      {tattooById.title !== "" && (
        <>
          <h2 className="page-title">
            Title:{" "}
            <span className="detail-page_title-property">
              {tattooById.title}
            </span>
          </h2>
          <DetailPageStyled>
            <DetailTattoo />
          </DetailPageStyled>
        </>
      )}
    </div>
  );
};

export default DetailPage;
