import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RegisterFormPage from "./RegisterFormPage";

describe("Given RegisterFormPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 2 buttons", () => {
      const expectedLength = 2;

      render(
        <Provider store={store}>
          <RegisterFormPage />
        </Provider>
      );

      const testedButtons = screen.getAllByRole("button");

      expect(testedButtons).toHaveLength(expectedLength);
    });
  });
});
