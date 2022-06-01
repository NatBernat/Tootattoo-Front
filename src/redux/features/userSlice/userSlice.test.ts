import { loginActionCreator } from "./userSlice";
import { IUserState } from "../../../types/types";
import userReducer from "../../features/userSlice/userSlice";

describe("Given a usersSlice reducer", () => {
  describe("When it receives a user and a login action", () => {
    test("Then it should return the same user logged", () => {
      const initialUser: IUserState = {
        username: "testuser",
        logged: false,
      };
      const expectedUser: IUserState = {
        username: "testuser",
        logged: true,
      };

      const loginAction = loginActionCreator(initialUser);
      const loggedUser = userReducer(initialUser, loginAction);

      expect(loggedUser).toEqual(expectedUser);
    });
  });
});

export {};
