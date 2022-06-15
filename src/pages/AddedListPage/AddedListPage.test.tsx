import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockedTattoos } from "../../mocks/mockTattoos";
import store from "../../redux/store/store";
import AddedListPage from "./AddedListPage";

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppDispatch: () => jest.fn(),
  useAppSelector: () => mockedTattoos,
}));

describe("Given AddedListPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 6 list items", () => {
      const expectedLength = 6;

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

  describe("When it's invoked and the next button clicked", () => {
    test("Then it should render 6 list items element", () => {
      const expectedLenght = 6;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <AddedListPage />
          </Provider>
        </BrowserRouter>
      );

      const nextButton = screen.getByAltText("next");
      userEvent.click(nextButton);
      const backButton = screen.getByAltText("back");
      userEvent.click(backButton);

      const result = screen.getAllByRole("listitem");
      expect(result).toHaveLength(expectedLenght);
    });
  });
});
