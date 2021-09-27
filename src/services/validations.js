const validateText = (string, errors, fieldName, regex, failMessage) => {
  if (!string) {
    errors[fieldName] = "Empty field";
  } else if (!regex.test(string)) {
    errors[fieldName] = failMessage;
  }
};

export const validateFields = (values, errors) => {
  validateText(
    values.name,
    errors,
    "name",
    /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    "Must only contain letters a-z and spaces"
  );
  validateText(
    values.mail,
    errors,
    "mail",
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    "Invalid formal. Must be mail@xyz.com"
  );

  validateText(
    values.reason,
    errors,
    "reason",
    /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    "Must only contain letters a-z and spaces"
  );
};
