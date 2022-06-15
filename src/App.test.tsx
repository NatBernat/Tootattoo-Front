import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";

const mockId = { username: "natbernat", id: "a1b2c3d4" };
jest.mock("jwt-decode", () => () => mockId);

const mockDispatch = jest.fn();

jest.mock("./redux/hooks/hooks", () => ({
  ...jest.requireActual("./redux/hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given App component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a header", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
      const testedHeader = screen.getByRole("banner");

      expect(testedHeader).toBeInTheDocument();
    });
  });

  describe("When it's instantiated and there's a token", () => {
    test("Then dispatch should be called", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
