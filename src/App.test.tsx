import TestRenderer from "react-test-renderer";
import App from "./App";

describe("Given a App component page", () => {
  describe("When it's instantiated", () => {
    test("Then it should always match this snapshot", () => {
      const testedApp = TestRenderer.create(<App />);

      expect(testedApp).toMatchSnapshot();
    });
  });
});
