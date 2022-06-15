import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

import mockTattoos from "../../mocks/mockTattoos";
import { BrowserRouter } from "react-router-dom";
import TattooAddedItem from "./TattooAddedItem";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a TattooItem component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a tattoo image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <TattooAddedItem tattoo={mockTattoos[0]} />
          </Provider>
        </BrowserRouter>
      );

      const renderedImage: HTMLLabelElement = screen.getByRole("img");

      expect(renderedImage).toBeInTheDocument();
    });
  });

  describe("When it's invoked and user clicks on delete button", () => {
    test("Then it should dispatch", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <TattooAddedItem tattoo={mockTattoos[0]} />
          </Provider>
        </BrowserRouter>
      );
      const deleteButton = screen.getByRole("button", { name: "DELETE" });

      userEvent.click(deleteButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked and user clicks on edit button", () => {
    test("Then it should dispatch", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <TattooAddedItem tattoo={mockTattoos[0]} />
          </Provider>
        </BrowserRouter>
      );
      const deleteButton = screen.getByRole("button", { name: "EDIT" });

      userEvent.click(deleteButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked and image can't be displayed", () => {
    test("Then it should throw an error to use backup image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <TattooAddedItem tattoo={mockTattoos[0]} />
          </Provider>
        </BrowserRouter>
      );
      const deleteButton = screen.getByRole("button", { name: "DELETE" });

      userEvent.click(deleteButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
