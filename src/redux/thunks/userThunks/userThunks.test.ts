import { server } from "../../../mocks/server";
import { ILogInForm } from "../../../types/types";
import { loginUserThunk } from "./userThunks";
import { AppDispatch } from "../../store/store";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () =>
  jest.fn().mockResolvedValue({ username: "testuser" })
);

describe("Given the userThunks", () => {
  describe("When loginUserThunk it's invoked", () => {
    test("Then the dispatch function should be called", async () => {
      const dispatch: AppDispatch = jest.fn();
      const userInfo: ILogInForm = {
        username: "testuser",
        password: "1234",
      };

      const testedThunk = loginUserThunk(userInfo);
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

export {};
