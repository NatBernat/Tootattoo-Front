import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import {
  ILogInForm,
  IRegisterInfo,
  IRegisterResponse,
  ILoginResponse,
  IUserInfo,
} from "../../../types/types";
import {
  loginActionCreator,
  logoutActionCreator,
} from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store/store";

export const loginUserThunk =
  (loginData: ILogInForm) => async (dispatch: AppDispatch) => {
    try {
      const route: string = `${process.env.REACT_APP_API_URL}users/login`;
      const { data: token } = await axios.post<ILogInForm, ILoginResponse>(
        route,
        loginData
      );

      localStorage.setItem("token", token);

      const decodedInfo: IUserInfo = jwtDecode(token);
      dispatch(loginActionCreator(decodedInfo));
      toast.success(`Welcome @${decodedInfo.username}`);
    } catch (error: any) {
      toast.error("Username or password are wrong");
    }
  };

export const registerUserThunk =
  (registerData: IRegisterInfo) => async (dispatch: AppDispatch) => {
    try {
      const route: string = `${process.env.REACT_APP_API_URL}users/register`;
      await axios.post<IRegisterInfo, IRegisterResponse>(route, registerData);

      toast.success("Register succesful");
    } catch (error: any) {
      toast.error("User could not be registered");
    }
  };

export const logOutUserThunk = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  toast.success("Logging out succesful");
  dispatch(logoutActionCreator());
};
