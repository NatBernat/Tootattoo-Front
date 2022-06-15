import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Loading from "./Loading";

describe("Given a Loading Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render an image", () => {
      render(
        <Provider store={store}>
          <Loading />
        </Provider>
      );

      const renderedImage = screen.getByRole("img");
      expect(renderedImage).toBeInTheDocument();
    });
  });
});
