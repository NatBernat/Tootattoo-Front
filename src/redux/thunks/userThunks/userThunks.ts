import axios from "axios";
import jwtDecode from "jwt-decode";
import { ILogInForm, IToken, IUserInfo } from "../../../types/types";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { AppDispatch } from "../../store/store";

export const loginUserThunk =
  (loginInfo: ILogInForm) => async (dispatch: AppDispatch) => {
    const route: string = `${process.env.REACT_APP_API_URL}/users/login`;
    const { data: token } = await axios.post<ILogInForm, IToken>(
      route,
      loginInfo
    );

    localStorage.setItem("token", token);

    const decodedInfo: IUserInfo = jwtDecode(token);
    dispatch(loginActionCreator(decodedInfo));
  };
