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
          changeLanguage: () => new Promise(() => {}),
        },
      };
      return Component;
    },
    useTranslation: () => {
      return {
        t: (key: string) => key,
        i18n: {
          language: "en",
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
  };
});

const defExp: never[] = [];
export default defExp;
