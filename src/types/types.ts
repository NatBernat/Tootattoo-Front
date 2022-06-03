export interface ILogInForm {
  username: string;
  password: string;
}

export interface ILoginResponse {
  data: string;
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

export interface ITattooCard {
  title: string;
  image: string;
}
export interface ITattooDetail {
  title: string;
  image: string;
  creator: string;
  creationDate: string;
  tags: [String];
}

export interface IUserState {
  username: string;
  logged: boolean;
}

export interface IUserInfo {
  username: string;
}
