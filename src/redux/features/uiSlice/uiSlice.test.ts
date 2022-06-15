import { finishedLoadingActionCreator, loadingActionCreator } from "./uiSlice";
import uiReducer from "./uiSlice";

describe("Given a uiSlice reducer", () => {
  describe("When loading receives an action", () => {
    test("Then it should change loading state from false to true", () => {
      const initialState = { loading: false };
      const expectedState = { loading: true };

      const loadingAction = loadingActionCreator();
      const loading = uiReducer(initialState, loadingAction);

      expect(loading).toEqual(expectedState);
    });
  });

  describe("When finishedLoading receives an action", () => {
    test("Then it should change loading state from false to true", () => {
      const initialState = { loading: true };
      const expectedState = { loading: false };

      const loadingAction = finishedLoadingActionCreator();
      const loading = uiReducer(initialState, loadingAction);

      expect(loading).toEqual(expectedState);
    });
  });
});
