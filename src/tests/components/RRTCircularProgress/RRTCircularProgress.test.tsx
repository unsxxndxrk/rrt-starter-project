import { render } from "tests/settings/render";
import RRTCircularProgress from "components/RRTCircularProgress/RRTCircularProgress";

const classNameMock: string = "class_name_mock";
const keepHeightMock: string = "420px";

describe("<RRTCircularProgress />", () => {
  test("should render RRTCircularProgress component", () => {
    const wrapper = render(<RRTCircularProgress />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  test("should render RRTCircularProgress component with className prop", () => {
    const wrapper = render(<RRTCircularProgress className={classNameMock} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(wrapper.container.getElementsByClassName(classNameMock).length).toBe(
      1,
    );
  });

  test("should render RRTCircularProgress component with keepHeight prop", () => {
    const wrapper = render(<RRTCircularProgress keepHeight={keepHeightMock} />);
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(
      wrapper.container
        .querySelector(".makeStyles-root")
        ?.getAttribute("style"),
    ).toBe(`height: ${keepHeightMock};`);
  });

  test("should render RRTCircularProgress component with color=primary prop", () => {
    const wrapper = render(<RRTCircularProgress color="primary" />);
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(
      wrapper.container.getElementsByClassName(
        "MuiCircularProgress-colorPrimary",
      ).length,
    ).toBe(1);
  });

  test("should render RRTCircularProgress component with color=secondary prop", () => {
    const wrapper = render(<RRTCircularProgress color="secondary" />);
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(
      wrapper.container.getElementsByClassName(
        "MuiCircularProgress-colorSecondary",
      ).length,
    ).toBe(1);
  });
});
