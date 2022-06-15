import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import NotFoundPage from "./NotFoundPage";

describe("Given NotFoundPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a paragraph", () => {
      const expectedText = "Page not found";

      render(
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      );

      const testedParagraph = screen.getByText(expectedText);

      expect(testedParagraph).toBeInTheDocument();
    });
  });

  describe("When it's rendered", () => {
    test("Then it should always match this snapshot", () => {
      const LoadingComponent = TestRenderer.create(
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      );

      expect(LoadingComponent).toMatchSnapshot();
    });
  });
});
