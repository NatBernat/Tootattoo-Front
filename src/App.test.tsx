import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store";

describe("Given App component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a header", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const testedHeader = screen.getByRole("heading");

      expect(testedHeader).toBeInTheDocument();
    });
  });
});
