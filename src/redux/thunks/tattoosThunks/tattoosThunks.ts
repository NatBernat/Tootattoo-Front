import axios from "axios";
import {
  deleteTattooActionCreator,
  loadTattoosActionCreator,
} from "../../features/tattoosSlice/tattoosSlice";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import { toast } from "react-toastify";
import { AppDispatch } from "../../store/store";

export const loadTattoosThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingActionCreator());
    const route = `${process.env.REACT_APP_API_URL}tattoos/list`;
    const {
      data: { tattoos },
    } = await axios.get(route);
    dispatch(loadTattoosActionCreator(tattoos));
    dispatch(finishedLoadingActionCreator());
  } catch (error: any) {
    dispatch(finishedLoadingActionCreator());
  }
};

export const deleteTattooThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const deleteToast = toast.loading("Deleting...", { isLoading: true });
      const route = `${process.env.REACT_APP_API_URL}tattoos/${id}`;
      await axios.delete(route);

      dispatch(deleteTattooActionCreator(id));
      toast.update(deleteToast, {
        isLoading: false,
        autoClose: 100,
      });
    } catch (error: any) {
      toast.error("Tattoo couldn't be removed, try again later");
    }
  };
