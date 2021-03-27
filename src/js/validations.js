const validator = {

  EMAIL_VALID_REGEX: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  PASSWORD_VALID_REGEX: /^[!@#$%&*()_+-=[\]|,./?><\w]{7,}$/i,

  /**
   * @param email {String}
   * @return {boolean}
   */
  isValidEmail(email) {
    return this.EMAIL_VALID_REGEX.test(email);
  },

  /**
   * @param password {String}
   * @return {boolean}
   */
  isValidPassword(password) {
    return this.PASSWORD_VALID_REGEX.test(password || "");
  },

  /**
   * @param text {String}
   * @return {boolean}
   */
  isNotEmpty(text) {
    return text && text.trim().length > 0;
  }
};

export default validator;
