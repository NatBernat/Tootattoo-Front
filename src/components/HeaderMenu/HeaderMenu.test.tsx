import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import HeaderMenu from "./HeaderMenu";

describe("Given a TattooItem component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a tattoo image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HeaderMenu />
          </Provider>
        </BrowserRouter>
      );

      const renderedLogo: HTMLLabelElement = screen.getByRole("img");

      expect(renderedLogo).toBeInTheDocument();
    });
  });
});
