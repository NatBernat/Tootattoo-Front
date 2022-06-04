import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LogInFormPage from "./LogInFormPage";

describe("Given LogInFormPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 2 buttons", () => {
      render(
        <Provider store={store}>
          <LogInFormPage />
        </Provider>
      );

      const testedButtons = screen.getAllByRole("button");

      expect(testedButtons).toHaveLength(2);
    });
  });
});
