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

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { headers: { Authorization: `Bearer ${token}` } };
};

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
    const deleteToast = toast.loading("Deleting...", { isLoading: true });
    try {
      const route = `${process.env.REACT_APP_API_URL}tattoos/${id}`;
      await axios.delete(route, getAuthHeader());

      toast.update(deleteToast, {
        isLoading: false,
        autoClose: 100,
      });

      dispatch(deleteTattooActionCreator(id));
    } catch (error: any) {
      toast.update(deleteToast, {
        isLoading: false,
        autoClose: 100,
      });
      toast.error("Tattoo couldn't be removed, try again later");
    }
  };
