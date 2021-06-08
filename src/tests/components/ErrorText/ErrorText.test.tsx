import { render } from "tests/settings/render";
import ErrorText from "components/ErrorText/ErrorText";

const errorTextMock: string = "error_mock";
const classNameMock: string = "class_name_mock";

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

  test("should render ErrorText component with custom className", () => {
    const wrapper = render(
      <ErrorText text={errorTextMock} className={classNameMock} />,
    );
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(wrapper.container.getElementsByClassName(classNameMock).length).toBe(
      1,
    );
  });

  test("should render ErrorText component with variant=tiny", () => {
    const wrapper = render(<ErrorText text={errorTextMock} variant="tiny" />);
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(
      wrapper.container.getElementsByClassName("makeStyles-tiny").length,
    ).toBe(1);
  });
});
