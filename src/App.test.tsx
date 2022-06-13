import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";

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
});
