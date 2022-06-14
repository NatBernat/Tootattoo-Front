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

describe("Given DetailPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 2 list items", () => {
      const expectedLength = 2;

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
