import server from "../../../mocks/server";
import { IRegisterInfo } from "../../../types/types";
import { loginUserThunk, registerUserThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () =>
  jest.fn().mockResolvedValue({ username: "testuser" })
);

const userRegisterData: IRegisterInfo = {
  username: "testuser",
  password: "1234",
  fullname: "Test User",
  email: "testuser@isdi.com",
};

describe("Given the userThunks", () => {
  describe("When loginUserThunk it's invoked", () => {
    test("Then the dispatch function should be called", async () => {
      const dispatch = jest.fn();

      const testedThunk = loginUserThunk(userRegisterData);
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When registerUserThunk it's invoked", () => {
    test("Then the dispatch function should be called", async () => {
      const dispatch = jest.fn();

      const testedThunk = registerUserThunk(userRegisterData);
      await testedThunk(dispatch());
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
