import server from "../../../mocks/server";
import { loadTattoosThunk } from "./tattoosThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the tattoosThunks", () => {
  describe("When loadTattoosThunk it's invoked", () => {
    test("Then the dispatch function should be called", async () => {
      const dispatch = jest.fn();

      const testedThunk = loadTattoosThunk();
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When deleteTattooThunk it's invoked", () => {
    test("Then the dispatch function should be called", async () => {
      const dispatch = jest.fn();

      const testedThunk = loadTattoosThunk();
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
