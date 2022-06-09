import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import TattooFormPage from "./TattooFormPage";

describe("Given TattooFormPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <TattooFormPage />
          </Provider>
        </BrowserRouter>
      );

      const testedButtons = screen.getByPlaceholderText("tattoo title");

      expect(testedButtons).toBeInTheDocument();
    });
  });
});
