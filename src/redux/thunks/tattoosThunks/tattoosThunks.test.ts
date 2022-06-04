import server from "../../../mocks/server";
import { loadTattoosThunk } from "./tattoosThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the userThunks", () => {
  describe("When loginUserThunk it's invoked", () => {
    test("Then the dispatch function should be called", async () => {
      const dispatch = jest.fn();

      const testedThunk = loadTattoosThunk();
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
