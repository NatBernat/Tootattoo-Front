import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LogInForm from "./LogInForm";

describe("Given a LoginForm component", () => {
  describe("When it's invoked", () => {
    test("Then it renders a password label", () => {
      const testedLabel = "Password";
      const inputPassword = "1234";

      render(<LogInForm />);

      const passwordLabel: HTMLLabelElement =
        screen.getByLabelText(testedLabel);
      userEvent.type(passwordLabel, inputPassword);

      expect(passwordLabel).toHaveValue(inputPassword);
    });
  });
});
