import { render, screen } from "@testing-library/react";

import UnloggedCheck from "./UnloggedCheck";

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
    test("Then it should render it children header", () => {
      const expectedHeaders = 1;

      render(
        <UnloggedCheck>
          <h1>Tootattoo</h1>
        </UnloggedCheck>
      );
      const searchedText = screen.getAllByRole("heading");

      expect(searchedText).toHaveLength(expectedHeaders);
    });
  });

  describe("When it's invoked when user is logged", () => {
    test("Then it should navigate to login enpoint", () => {
      mockLogged = true;
      render(
        <UnloggedCheck>
          <h1>Tootattoo</h1>
        </UnloggedCheck>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/public-list");
    });
  });
});
