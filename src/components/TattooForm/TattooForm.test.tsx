import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockTattoos from "../../mocks/mockTattoos";
import store from "../../redux/store/store";
import TattooForm from "./TattooForm";

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

describe("Given a TattooForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a title label", () => {
      const testedLabel = "Title";
      const inputTitle = "Tattoo random name";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TattooForm tattoo={null} />
          </Provider>
        </BrowserRouter>
      );

      const titleLabel: HTMLLabelElement = screen.getByLabelText(testedLabel);
      userEvent.type(titleLabel, inputTitle);

      expect(titleLabel).toHaveValue(inputTitle);
    });
  });

  describe("When it's invoked and an user clicks on the 'Submit' button", () => {
    test("Then it should call the create dispatch function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <TattooForm tattoo={null} />
          </Provider>
        </BrowserRouter>
      );

      const imageInput = screen.getByLabelText("Image (max. 5mb)");
      const imageInputText = "randomImage.png";
      userEvent.type(imageInput, imageInputText);
      const titleInput = screen.getByLabelText("Title");
      const titleInputText = "Random title";
      userEvent.type(titleInput, titleInputText);
      const submitButton = screen.getByRole("button", {
        name: "Submit tattoo",
      });
      userEvent.click(submitButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked receiving a tattoo and an user clicks on the 'Submit' button", () => {
    test("Then it should call the update dispatch function", () => {
      const mockTattoo = mockTattoos[0];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <TattooForm tattoo={mockTattoo} />
          </Provider>
        </BrowserRouter>
      );

      const imageInput = screen.getByLabelText("Image (max. 5mb)");
      const imageInputText = "randomImage.png";
      userEvent.type(imageInput, imageInputText);
      const titleInput = screen.getByLabelText("Title");
      const titleInputText = "Random title";
      userEvent.type(titleInput, titleInputText);
      const submitButton = screen.getByRole("button", {
        name: "Submit tattoo",
      });
      userEvent.click(submitButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
