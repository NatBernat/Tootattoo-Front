import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a RegisterForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a password label", () => {
      const testedLabel = "E-mail";
      const inputEmail = "testuser@isdi.com";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const emailLabel: HTMLLabelElement = screen.getByLabelText(testedLabel);
      userEvent.type(emailLabel, inputEmail);

      expect(emailLabel).toHaveValue(inputEmail);
    });
  });

  describe("When it's invoked and an user clicks on the 'Register' button", () => {
    test("Then it should call the dispatch function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const registerButton = screen.getByRole("button", { name: "Register" });
      userEvent.click(registerButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
