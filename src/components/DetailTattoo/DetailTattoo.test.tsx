import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockTattoos from "../../mocks/mockTattoos";
import store from "../../redux/store/store";
import DetailTattoo from "./DetailTattoo";

jest.mock("../../redux/hooks/hooks", () => ({
  ...jest.requireActual("../../redux/hooks/hooks"),
  useAppSelector: () => jest.fn().mockReturnValue(mockTattoos[0]),
}));

describe("Given DetailTattoo component", () => {
  describe("When it's instantiated", () => {
    test("Then it render a tatto image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailTattoo />
          </Provider>
        </BrowserRouter>
      );

      const tattooImage = screen.getByRole("img");

      expect(tattooImage).toBeInTheDocument();
    });
  });
});
