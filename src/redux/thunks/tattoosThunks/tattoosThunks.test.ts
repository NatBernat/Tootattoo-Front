import axios from "axios";
import mockTattoos from "../../../mocks/mockTattoos";
import server from "../../../mocks/server";
import {
  createTattooThunk,
  deleteTattooThunk,
  getTattooByIdThunk,
  loadTattoosByUserThunk,
  loadTattoosThunk,
  updateTattooThunk,
} from "./tattoosThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadTattoosThunk", () => {
  describe("When it's invoked and the axios response is positive", () => {
    test("Then the dispatch function should be called 3 times", async () => {
      axios.get = jest.fn().mockResolvedValue({ data: { mockTattoos } });
      const dispatch = jest.fn();
      const expectedCalls = 3;

      const testedThunk = loadTattoosThunk();
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });

  describe("When it's invoked and the axios response is negative", () => {
    test("Then the dispatch function should be called 2 times", async () => {
      axios.get = jest.fn().mockRejectedValue(new Error());
      const dispatch = jest.fn();
      const expectedCalls = 2;

      const testedThunk = loadTattoosThunk();
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the loadTattoosByUserThunk", () => {
  describe("When it's invoked and the axios response is positive", () => {
    test("Then the dispatch function should be called 3 times", async () => {
      axios.get = jest.fn().mockResolvedValue({ data: { mockTattoos } });
      const dispatch = jest.fn();
      const expectedCalls = 3;

      const testedThunk = loadTattoosByUserThunk();
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });

  describe("When it's invoked and the axios response is negative", () => {
    test("Then the dispatch function should be called 2 times", async () => {
      axios.get = jest.fn().mockRejectedValue(new Error());
      const dispatch = jest.fn();
      const expectedCalls = 2;

      const testedThunk = loadTattoosByUserThunk();
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given the getTattooByIdThunk", () => {
  describe("When  it's invoked and the axios response is positive", () => {
    test("Then the dispatch function should be called", async () => {
      axios.get = jest.fn().mockResolvedValue({ data: mockTattoos[0] });
      const dispatch = jest.fn();
      const id = "1234";

      const testedThunk = getTattooByIdThunk(id);
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When  it's invoked and the axios response is negative", () => {
    test("Then the dispatch function shouldn't be called", async () => {
      axios.get = jest.fn().mockRejectedValue(new Error());
      const dispatch = jest.fn();
      const id = "1234";

      const testedThunk = deleteTattooThunk(id);
      await testedThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the deleteTattooThunk", () => {
  describe("When  it's invoked and the axios response is positive", () => {
    test("Then the dispatch function should be called", async () => {
      axios.delete = jest.fn().mockResolvedValue({
        message: "Tattoo has been deleted",
      });
      const dispatch = jest.fn();
      const id = "1234";

      const testedThunk = deleteTattooThunk(id);
      await testedThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When  it's invoked and the axios response is negative", () => {
    test("Then the dispatch function shouldn't be called", async () => {
      axios.delete = jest.fn().mockRejectedValue(new Error());
      const dispatch = jest.fn();
      const id = "1234";

      const testedThunk = deleteTattooThunk(id);
      await testedThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the createTattooThunk", () => {
  describe("When it's invoked  and the axios response is positive", () => {
    test("Then the dispatch function should be called", async () => {
      axios.post = jest.fn().mockResolvedValue({ data: mockTattoos[0] });
      const dispatch = jest.fn();
      const formData = new FormData();

      const testedThunk = createTattooThunk(formData);
      await testedThunk(dispatch());
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked  and the axios response is negative", () => {
    test("Then the dispatch function shouldn't be called", async () => {
      axios.post = jest.fn().mockRejectedValue(new Error());
      const dispatch = jest.fn();
      const formData = new FormData();

      const testedThunk = createTattooThunk(formData);
      await testedThunk(dispatch);
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the updateTattooThunk", () => {
  describe("When it's invoked  and the axios response is positive", () => {
    test("Then the dispatch function should be called", async () => {
      const dispatch = jest.fn();
      const formData = new FormData();
      const id = "1234";

      const testedThunk = updateTattooThunk(formData, id);
      await testedThunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked  and the axios response is negative", () => {
    test("Then the dispatch function shouldn't be called", async () => {
      axios.post = jest.fn().mockRejectedValue(new Error());
      const dispatch = jest.fn();
      const formData = new FormData();
      const id = "1234";

      const testedThunk = updateTattooThunk(formData, id);
      await testedThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
