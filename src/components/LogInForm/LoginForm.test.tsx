import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LogInForm from "./LogInForm";

describe("Given a LoginForm component", () => {
  describe("When it's invoked", () => {
    test("Then it renders a password label", () => {
      const testedLabel = "Password";
      const inputPassword = "1234";

      render(
        <Provider store={store}>
          <LogInForm />
        </Provider>
      );

      const passwordLabel: HTMLLabelElement =
        screen.getByLabelText(testedLabel);
      userEvent.type(passwordLabel, inputPassword);

      expect(passwordLabel).toHaveValue(inputPassword);
    });
  });
});
