export interface ILogInForm {
  username: string;
  password: string;
}

export interface IRegisterInfo {
  username: string;
  password: string;
  fullname: string;
  email: string;
}

export interface IRegisterResponse {
  user: string;
}

export interface ILoginResponse {
  data: string;
}

export interface IUserState {
  username: string;
  logged: boolean;
}

export interface IUserInfo {
  username: string;
}
