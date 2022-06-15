import { useEffect, useState } from "react";
import { ITattoo } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadTattoosByUserThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import TattooAddedItem from "../../components/TattooAddedItem/TattooAddedItem";
import { scrollUp } from "../PublicListPage/PublicListPage";
import AddedListPageStyled from "./AddedListPageStyled";

const AddedListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tattoos: ITattoo[] = useAppSelector((state) => state.tattoos);

  const initialPage: ITattoo[] = [];
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(loadTattoosByUserThunk());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(tattoos.slice(0, 6));
  }, [tattoos]);

  useEffect(() => {
    setCurrentPage(tattoos.slice(index, index + 6));
  }, [index, tattoos]);

  return (
    <>
      <h2 className="page-title">My tattoos</h2>
      <AddedListPageStyled>
        <ul className="page">
          {currentPage.map((tattoo) => {
            return <TattooAddedItem key={tattoo._id} tattoo={tattoo} />;
          })}
        </ul>
        {tattoos.length > 5 && (
          <div className="page-buttons" onClick={scrollUp}>
            {index > 0 && (
              <button
                className="page-button"
                onClick={() => {
                  if (index >= 6) {
                    setIndex(index - 6);
                  }
                }}
              >
                <img
                  className="button__icon--back"
                  src="./images/arrow-icon.svg"
                  alt="back"
                  title="back"
                />
              </button>
            )}
            {tattoos.length > index + 6 && (
              <button
                className="page-button"
                onClick={() => {
                  if (index < tattoos.length - 6) {
                    setIndex(index + 6);
                  }
                }}
              >
                <img
                  className="button__icon--next"
                  src="./images/arrow-icon.svg"
                  alt="next"
                  title="next"
                />
              </button>
            )}
          </div>
        )}
      </AddedListPageStyled>
    </>
  );
};

export default AddedListPage;
