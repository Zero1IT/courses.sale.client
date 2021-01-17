const validator = {

  EMAIL_VALID_REGEX: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,

  isValidEmail(email) {
    console.log(email);
    console.log(this.EMAIL_VALID_REGEX.test(email));
    return this.EMAIL_VALID_REGEX.test(email);
  }
};

export default validator;
