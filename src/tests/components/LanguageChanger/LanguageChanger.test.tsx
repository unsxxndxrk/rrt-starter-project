import { render } from "tests/settings/render";
import LanguageChanger from "components/LanguageChanger/LanguageChanger";

describe("<LanguageChanger />", () => {
  test("should render LanguageChanger component", () => {
    const wrapper = render(<LanguageChanger />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
