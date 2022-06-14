import mockTattoos from "../../../mocks/mockTattoos";
import { ITattoo } from "../../../types/types";
import {
  deleteTattooActionCreator,
  loadTattoosActionCreator,
  loadTattoosByUserActionCreator,
} from "./tattoosSlice";
import tattoosReducer from "../../features/tattoosSlice/tattoosSlice";

describe("Given a tattoosSlice reducer", () => {
  describe("When loadTattoos receives an action", () => {
    test("Then it should return an array of tattoos", () => {
      const initialState: ITattoo[] = [];
      const expectedState = [...mockTattoos];

      const loadAction = loadTattoosActionCreator(mockTattoos);
      const loadTattoos = tattoosReducer(initialState, loadAction);

      expect(loadTattoos).toEqual(expectedState);
    });
  });

  describe("When loadTattoosByUser receives an action", () => {
    test("Then it should return an array of tattoos", () => {
      const initialState: ITattoo[] = [];
      const expectedState = [...mockTattoos];

      const loadTattoosByUserAction =
        loadTattoosByUserActionCreator(mockTattoos);
      const loadTattoosByUser = tattoosReducer(
        initialState,
        loadTattoosByUserAction
      );

      expect(loadTattoosByUser).toEqual(expectedState);
    });
  });

  describe("When deleteTattoo receives an action", () => {
    test("Then it should return an array of tattoos without the deleted tattoos", () => {
      const initialState: ITattoo[] = mockTattoos;
      const expectedState = [
        {
          _id: "2a2b2c",
          title: "Colored realistic flowers",
          image: "https://pbs.twimg.com/media/FTW9Z45aAAAz67v?format=jpg",
          imageBackup: "https://pbs.twimg.com/media/FTW9Z45aAAAz67v?format=jpg",
          creator: "6295aacd280fd64f7583019f",
          creationDate: "2022-06-02",
          tags: ["medium", "traditional", "color", "photo"],
        },
      ];

      const deleteAction = deleteTattooActionCreator(mockTattoos[0]._id);
      const deleteTattoo = tattoosReducer(initialState, deleteAction);

      expect(deleteTattoo).toEqual(expectedState);
    });
  });
});
