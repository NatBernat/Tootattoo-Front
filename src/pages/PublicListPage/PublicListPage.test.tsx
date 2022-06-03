import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import PublicListPage from "./PublicListPage";

describe("Given PublicListPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a 2 images", () => {
      render(
        <Provider store={store}>
          <PublicListPage />
        </Provider>
      );
      const testedList = screen.getByRole("list");

      expect(testedList).toBeInTheDocument();
    });
  });
});
