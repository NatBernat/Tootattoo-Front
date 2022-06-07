import { render, screen } from "@testing-library/react";
import AddedListPage from "../../pages/AddedListPage/AddedListPage";

import LoggedCheck from "./LoggedCheck";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-redux"),
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = false;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ logged: mockLogged }),
}));

describe("Given a LoggedChecked function", () => {
  describe("When it's invoked when user is not logged", () => {
    test("Then it should navigate to login enpoint", () => {
      render(
        <LoggedCheck>
          <h1>Tootattoo</h1>
        </LoggedCheck>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("When it's invoked when user is logged", () => {
    test("Then it should render its children when the user is logged", () => {
      mockLogged = true;

      const expectedHeaders = 1;

      render(
        <LoggedCheck>
          <h1>Tootattoo</h1>
        </LoggedCheck>
      );

      const searchedText = screen.getAllByRole("heading");

      expect(searchedText).toHaveLength(expectedHeaders);
    });
  });
});
