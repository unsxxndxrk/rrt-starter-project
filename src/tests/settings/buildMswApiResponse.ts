export const buildMswApiResponse = (
  error: boolean,
  message: string,
  payload: any,
) => ({
  error,
  message,
  payload,
});
