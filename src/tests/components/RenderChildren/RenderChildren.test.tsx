import { render } from "tests/settings/render";
import RenderChildren from "components/RenderChildren/RenderChildren";

const childrenMock: string = "children_mock";

describe("<RenderChildren />", () => {
  test("should render RenderChildren component", () => {
    const wrapper = render(<RenderChildren>{childrenMock}</RenderChildren>);
    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(wrapper.getByText(childrenMock)).toBeTruthy();
  });
});
