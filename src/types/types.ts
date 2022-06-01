export interface IUserState {
  username: string;
  fullname: string;
  logged: boolean;
}

export interface IUserInfo {
  username: string;
  fullname: string;
}

export interface ILogInForm {
  username: string;
  password: string;
}

export interface IToken {
  data: string;
}
