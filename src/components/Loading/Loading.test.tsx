import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import store from "../../redux/store/store";
import Loading from "./Loading";

describe("Given a Loading Component", () => {
  describe("When it's rendered", () => {
    test("Then it should always match this snapshot", () => {
      const LoadingComponent = TestRenderer.create(
        <Provider store={store}>
          <Loading />
        </Provider>
      );

      expect(LoadingComponent).toMatchSnapshot();
    });
  });
});
