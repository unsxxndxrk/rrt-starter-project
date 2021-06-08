jest.mock("react-i18next", () => {
  const originalModule = jest.requireActual("react-i18next");
  return {
    ...originalModule,
    withTranslation: () => (Component: any) => {
      Component.defaultProps = {
        ...Component.defaultProps,
        t: (key: string) => key,
        i18n: {
          language: "en",
          changeLanguage: jest
            .fn()
            .mockImplementation((lang) => console.log(lang)),
        },
      };
      return Component;
    },
    useTranslation: () => {
      return {
        t: (key: string) => key,
        i18n: {
          language: "en",
          changeLanguage: jest
            .fn()
            .mockImplementation((lang) => console.log(lang)),
        },
      };
    },
  };
});

const defExp: never[] = [];
export default defExp;
