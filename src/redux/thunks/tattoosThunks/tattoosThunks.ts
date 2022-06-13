import axios from "axios";
import {
  createTattooActionCreator,
  deleteTattooActionCreator,
  loadTattoosActionCreator,
  loadTattoosByUserActionCreator,
  updateTattooActionCreator,
} from "../../features/tattoosSlice/tattoosSlice";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import { toast } from "react-toastify";
import { AppDispatch } from "../../store/store";
import { loadTattooByIdActionCreator } from "../../features/tattooSlice/tattooSlice";

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

export const loadTattoosByUserThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingActionCreator());
    const route = `${process.env.REACT_APP_API_URL}tattoos/list/user`;
    const {
      data: { tattoosByUser },
    } = await axios.get(route, getAuthHeader());
    dispatch(loadTattoosByUserActionCreator(tattoosByUser));
    dispatch(finishedLoadingActionCreator());
  } catch (error: any) {
    dispatch(finishedLoadingActionCreator());
  }
};

export const getTattooByIdThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const route = `${process.env.REACT_APP_API_URL}tattoos/${id}`;
      const {
        data: { tattooById },
      } = await axios.get(route);
      dispatch(loadTattooByIdActionCreator(tattooById));
    } catch (error: any) {
      toast.error("Tattoo couldn't be found");
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

export const createTattooThunk =
  (newTattoo: FormData) => async (dispatch: AppDispatch) => {
    const createTattooToast = toast.loading("Adding tattoo...", {
      isLoading: true,
    });
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}tattoos/newTattoo`,
        newTattoo,
        getAuthHeader()
      );

      toast.update(createTattooToast, {
        isLoading: false,
        autoClose: 100,
      });
      toast.success("Tattoo added!");

      dispatch(createTattooActionCreator(newTattoo));
    } catch (error: any) {
      toast.update(createTattooToast, {
        isLoading: false,
        autoClose: 100,
      });
      toast.error("Tattoo could not be created");
    }
  };

export const updateTattooThunk =
  (formData: FormData, id: string) => async (dispatch: AppDispatch) => {
    const updateTattooToast = toast.loading("Updating tattoo...", {
      isLoading: true,
    });
    try {
      const route = `${process.env.REACT_APP_API_URL}tattoos/${id}`;
      await axios.put(route, formData, getAuthHeader());
      dispatch(updateTattooActionCreator(formData));
      toast.update(updateTattooToast, {
        isLoading: false,
        autoClose: 100,
      });
      toast.success("Tattoo updated!");
    } catch (error) {
      toast.update(updateTattooToast, {
        isLoading: false,
        autoClose: 100,
      });
      toast.error("Tattoo could not be updated");
    }
  };
