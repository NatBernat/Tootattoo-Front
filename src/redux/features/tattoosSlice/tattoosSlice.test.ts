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
      const deletedTattoo = {
        _id: "62a842836e5ac2e9dc0d7887",
        title: "poketattoo",
        image: "uploads/images/1655220326956E3WmND7XEAMNJhf.jpg",
        imageBackup:
          "https://firebasestorage.googleapis.com/v0/b/tootattoo-images.appspot.com/o/1655220326956E3WmND7XEAMNJhf.jpg?alt=media&token=332f7d9a-559b-48f9-bd60-36460bd036b6",
        creator: "gromenauer",
        creationDate: "2022-6-14",
        tags: [],
      };

      const deleteAction = deleteTattooActionCreator(mockTattoos[0]._id);
      const deleteTattoo = tattoosReducer(initialState, deleteAction);

      expect(deleteTattoo).not.toContain(deletedTattoo);
    });
  });
});
