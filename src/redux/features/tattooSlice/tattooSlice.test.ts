import tattooReducer, {
  loadTattooByIdActionCreator,
} from "../../features/tattooSlice/tattooSlice";
import mockTattoos from "../../../mocks/mockTattoos";
import { ITattoo } from "../../../types/types";

describe("Given a tattoosSlice reducer", () => {
  describe("When loadTattoos receives an action", () => {
    test("Then it should return an array of tattoos", () => {
      const initialState: ITattoo = {
        _id: "",
        title: "",
        image: "",
        creator: "",
        creationDate: "",
        tags: [],
      };
      const expectedState = mockTattoos[0];

      const loadTattooByIdAction = loadTattooByIdActionCreator(mockTattoos[0]);
      const loadTattooById = tattooReducer(initialState, loadTattooByIdAction);

      expect(loadTattooById).toEqual(expectedState);
    });
  });
});
