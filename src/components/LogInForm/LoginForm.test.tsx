import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LogInForm from "./LogInForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate,
}));

describe("Given a LoginForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a password label", () => {
      const testedLabel = "Password";
      const inputPassword = "1234";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogInForm />
          </Provider>
        </BrowserRouter>
      );

      const passwordLabel: HTMLLabelElement =
        screen.getByLabelText(testedLabel);
      userEvent.type(passwordLabel, inputPassword);

      expect(passwordLabel).toHaveValue(inputPassword);
    });
  });

  describe("When it's invoked and an user clicks on the 'Log In' button", () => {
    test("Then it should call the dispatch function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LogInForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText("username");
      const usernameinputText = "randomUsername";
      userEvent.type(usernameInput, usernameinputText);
      const passwordInput = screen.getByPlaceholderText("password");
      const passwordInputText = "randomPassword";
      userEvent.type(passwordInput, passwordInputText);
      const loginButton = screen.getByRole("button", { name: "Log In" });
      userEvent.click(loginButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
