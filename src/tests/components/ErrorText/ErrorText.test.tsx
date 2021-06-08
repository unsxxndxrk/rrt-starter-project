import { render } from "tests/settings/render";
import ErrorText from "components/ErrorText/ErrorText";

const errorTextMock: string = "error_mock";

describe("<ErrorText />", () => {
  test("should render ErrorText component with custom text", () => {
    const wrapper = render(<ErrorText text={errorTextMock} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(wrapper.getByText(errorTextMock)).toBeTruthy();
  });

  test("should render ErrorText component with unexpected error", () => {
    const wrapper = render(<ErrorText type="unexpected" />);
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(wrapper.getByText("errors.unexpected")).toBeTruthy();
  });
});
