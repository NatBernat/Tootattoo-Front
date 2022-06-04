import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  ILogInForm,
  IRegisterInfo,
  IRegisterResponse,
  ILoginResponse,
  IUserInfo,
} from "../../../types/types";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store/store";

export const loginUserThunk =
  (loginData: ILogInForm) => async (dispatch: AppDispatch) => {
    const route: string = `${process.env.REACT_APP_API_URL}users/login`;
    const { data: token } = await axios.post<ILogInForm, ILoginResponse>(
      route,
      loginData
    );

    localStorage.setItem("token", token);

    const decodedInfo: IUserInfo = jwtDecode(token);
    dispatch(loginActionCreator(decodedInfo));
  };

export const registerUserThunk =
  (registerData: IRegisterInfo) => async (dispatch: AppDispatch) => {
    const route: string = `${process.env.REACT_APP_API_URL}users/register`;

    await axios.post<IRegisterInfo, IRegisterResponse>(route, registerData);
  };
