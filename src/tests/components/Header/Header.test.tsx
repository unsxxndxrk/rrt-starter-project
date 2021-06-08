import { render } from "tests/settings/render";
import Header from "components/Header/Header";

describe("<Header />", () => {
  test("should render Header component", () => {
    const wrapper = render(<Header />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
