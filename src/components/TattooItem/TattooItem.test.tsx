import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import TattooItem from "./TattooItem";

import mockTattoos from "../../mocks/mockTattoos";

describe("Given a TattooItem component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a tattoo image", () => {
      render(
        <Provider store={store}>
          <TattooItem tattoo={mockTattoos[0]} />
        </Provider>
      );

      const renderedImage: HTMLLabelElement = screen.getByRole("img");

      expect(renderedImage).toBeInTheDocument();
    });
  });
});
