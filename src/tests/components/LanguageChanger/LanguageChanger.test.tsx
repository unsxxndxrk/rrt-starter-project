import { render } from "tests/settings/render";
import LanguageChanger from "components/LanguageChanger/LanguageChanger";
import { RenderResult } from "@testing-library/react";

let wrapper: RenderResult;

beforeEach(() => {
  wrapper = render(<LanguageChanger />);
});

describe("<LanguageChanger />", () => {
  test("should render LanguageChanger component", () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  test("should have language buttons", () => {
    const enButton = wrapper.getByText("en");
    const ruButton = wrapper.getByText("ru");
    expect(enButton).toBeInTheDocument();
    expect(ruButton).toBeInTheDocument();
  });
});
