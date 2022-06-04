import mockTattoos from "../../../mocks/mockTattoos";
import { ITattoo } from "../../../types/types";
import { loadTattoosActionCreator } from "./tattoosSlice";
import tattoosReducer from "../../features/tattoosSlice/tattoosSlice";

describe("Given a tattoosSlice reducer", () => {
  describe("When it receives an action", () => {
    test("Then it should return the same user logged", () => {
      const initialState: ITattoo[] = [];
      const expectedState = [...mockTattoos];

      const loadAction = loadTattoosActionCreator(mockTattoos);
      const loadTattoos = tattoosReducer(initialState, loadAction);

      expect(loadTattoos).toEqual(expectedState);
    });
  });
});
