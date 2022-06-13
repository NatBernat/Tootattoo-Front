import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import mockTattoos from "../../mocks/mockTattoos";
import DetailPage from "./DetailPage";

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppDispatch: () => jest.fn(),
  useAppSelector: () => mockTattoos[0],
}));

describe("Given PublicListPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 3 list items", () => {
      const expectedLength = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailPage />
          </Provider>
        </BrowserRouter>
      );

      const testedList = screen.getAllByRole("listitem");

      expect(testedList).toHaveLength(expectedLength);
    });
  });
});
