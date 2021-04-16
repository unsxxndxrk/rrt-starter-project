const buildSuccessfulResponsePayload = (data) => ({
  error: false,
  message: "successful",
  payload: data,
});

module.exports = buildSuccessfulResponsePayload;
