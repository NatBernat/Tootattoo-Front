import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import PublicListPage from "./PublicListPage";

describe("Given PublicListPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PublicListPage />
          </Provider>
        </BrowserRouter>
      );

      const testedList = screen.getByRole("list");

      expect(testedList).toBeInTheDocument();
    });
  });
});
