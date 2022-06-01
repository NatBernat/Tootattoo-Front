export interface IUserState {
  username: string;
  logged: boolean;
}

export interface IUserInfo {
  username: string;
}

export interface ILogInForm {
  username: string;
  password: string;
}

export interface IToken {
  data: string;
}