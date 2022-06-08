import { useEffect } from "react";
import TattooItem from "../../components/TattooItem/TattooItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadTattoosThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import { ITattoo } from "../../types/types";

import PublicListPageStyled from "./PublicListPageStyled";

const PublicListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tattoos: ITattoo[] = useAppSelector((state) => state.tattoos);
  const logged = useAppSelector((state) => state.user.logged);
  const loggedUsername = useAppSelector((state) => state.user.username);

  useEffect(() => {
    dispatch(loadTattoosThunk());
  }, [dispatch]);

  return (
    <>
      <p className="greeting">{logged ? `Logged as @${loggedUsername}` : ""}</p>
      <PublicListPageStyled className="page">
        {}
        {tattoos.map((tattoo) => {
          return <TattooItem key={tattoo._id} tattoo={tattoo} />;
        })}
      </PublicListPageStyled>
    </>
  );
};

export default PublicListPage;
