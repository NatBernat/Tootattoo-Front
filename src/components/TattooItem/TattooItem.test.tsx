import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import TattooItem from "./TattooItem";
import { ITattooCard } from "../../types/types";

describe("Given a TattooItem component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a tattoo image", () => {
      const providedTattoo: ITattooCard = {
        title: "test title",
        image:
          "https://i.pinimg.com/564x/e8/f7/0c/e8f70c51540684a4daf881a0cb73ed42.jpg",
      };

      render(
        <Provider store={store}>
          <TattooItem
            title={providedTattoo.title}
            image={providedTattoo.image}
          />
        </Provider>
      );

      const renderedImage: HTMLLabelElement = screen.getByRole("img");

      expect(renderedImage).toBeInTheDocument();
    });
  });
});
