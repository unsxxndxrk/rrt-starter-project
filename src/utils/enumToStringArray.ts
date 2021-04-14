export const enumToStringArray = (enumerable: any): string[] => {
  return Object.keys(enumerable).map((key) => enumerable[key].toString());
};
