import axios from "axios";
import { loadTattoosActionCreator } from "../../features/tattoosSlice/tattoosSlice";
import { AppDispatch } from "../../store/store";

export const loadTattoosThunk = () => async (dispatch: AppDispatch) => {
  const {
    data: { tattoos },
  } = await axios.get(`${process.env.REACT_APP_API_URL}tattoos/list`);

  dispatch(loadTattoosActionCreator(tattoos));
};
