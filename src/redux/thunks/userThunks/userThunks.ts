import axios from "axios";
import { ILogInForm, IToken } from "../../../types/types";
import { AppDispatch } from "../../store/store";

export const loginUserThunk =
  (loginInfo: ILogInForm) => async (dispatch: AppDispatch) => {
    const route: string = `${process.env.REACT_APP_API_URL}/users/login`;
    const { data }: IToken = await axios.post(route, loginInfo);

    localStorage.setItem("token", data);
  };
