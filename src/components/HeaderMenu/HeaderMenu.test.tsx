import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import HeaderMenu from "./HeaderMenu";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppSelector: () => jest.fn().mockReturnValue(true),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a HeaderMenu component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a header image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeaderMenu />
          </Provider>
        </BrowserRouter>
      );

      const renderedLogo: HTMLLabelElement = screen.getByRole("img");

      expect(renderedLogo).toBeInTheDocument();
    });
  });

  describe("When it's invoked and user clicks on Log out", () => {
    test("Then it should render a tattoo image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeaderMenu />
          </Provider>
        </BrowserRouter>
      );

      const logOutLink = screen.getByText("Log out");
      userEvent.click(logOutLink);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
