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
    const loginToast = toast.loading("Logging in...", { isLoading: true });
    try {
      const route: string = `${process.env.REACT_APP_API_URL}users/login`;
      const { data: token } = await axios.post<ILogInForm, ILoginResponse>(
        route,
        loginData
      );

      localStorage.setItem("token", token);

      const decodedInfo: IUserInfo = jwtDecode(token);
      dispatch(loginActionCreator(decodedInfo));
      toast.update(loginToast, {
        isLoading: false,
        autoClose: 100,
      });

      toast.success(`Welcome @${decodedInfo.username}`);
    } catch (error: any) {
      toast.update(loginToast, {
        isLoading: false,
        autoClose: 100,
      });
      toast.error("Username or password are wrong");
    }
  };

export const registerUserThunk =
  (registerData: IRegisterInfo) => async (dispatch: AppDispatch) => {
    const registerToast = toast.loading("Registering...", {
      isLoading: true,
    });
    try {
      const route: string = `${process.env.REACT_APP_API_URL}users/register`;
      await axios.post<IRegisterInfo, IRegisterResponse>(route, registerData);

      toast.update(registerToast, {
        isLoading: false,
        autoClose: 100,
      });

      toast.success("Register succesful");
    } catch (error: any) {
      toast.update(registerToast, {
        isLoading: false,
        autoClose: 100,
      });
      toast.error("User could not be registered");
    }
  };

export const logOutUserThunk = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  toast.success("Logged out");
  dispatch(logoutActionCreator());
};
