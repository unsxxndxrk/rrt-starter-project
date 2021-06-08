import App from "App";
import { render } from "tests/settings/render";

describe("<App />", () => {
  test("should render App component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
