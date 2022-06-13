import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import PublicListPage from "./PublicListPage";
import mockTattoos from "../../mocks/mockTattoos";

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppDispatch: () => jest.fn(),
  useAppSelector: () => mockTattoos,
}));

describe("Given PublicListPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list with 2 items", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PublicListPage />
          </Provider>
        </BrowserRouter>
      );

      const testedList = screen.getAllByRole("listitem");

      expect(testedList).toHaveLength(2);
    });
  });
});
