import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockTattoos from "../../mocks/mockTattoos";
import store from "../../redux/store/store";
import AddedListPage from "./AddedListPage";

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppDispatch: () => jest.fn(),
  useAppSelector: () => mockTattoos,
}));

describe("Given AddedListPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list", () => {
      const expectedLength = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddedListPage />
          </Provider>
        </BrowserRouter>
      );

      const testedList = screen.getAllByRole("listitem");

      expect(testedList).toHaveLength(expectedLength);
    });
  });
});
