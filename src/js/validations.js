const validator = {

  EMAIL_VALID_REGEX: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  PASSWORD_VALID_REGEX: /^[!@#$%&*()_+-=[\]|,./?><\w]{7,}$/i,

  isValidEmail(email) {
    return this.EMAIL_VALID_REGEX.test(email);
  },

  isValidPassword(password) {
    return this.PASSWORD_VALID_REGEX.test(password);
  }
};

export default validator;
