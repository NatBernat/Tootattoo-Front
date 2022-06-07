import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LogInFormPage from "./LogInFormPage";

describe("Given LogInFormPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogInFormPage />
          </Provider>
        </BrowserRouter>
      );

      const testedButtons = screen.getByRole("button");

      expect(testedButtons).toBeInTheDocument();
    });
  });
});
