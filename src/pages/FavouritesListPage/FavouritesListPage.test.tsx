import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import AddedListPage from "./FavouritesListPage";

describe("Given AddedListPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list", () => {
      render(
        <Provider store={store}>
          <AddedListPage />
        </Provider>
      );

      const testedList = screen.getByRole("list");

      expect(testedList).toBeInTheDocument();
    });
  });
});
