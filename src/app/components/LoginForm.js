import React, {useState} from "react";
import validator from "../../js/validations";
import {CircleLoaderSuccess} from "./Loaders";

function LoginForm({onSubmit}) {
  const [email, setEmail] = useState({value: "", valid: null});
  const [password, setPassword] = useState({value: "", valid: null});

  const changeEmail = e => {
    setEmail({
      value: e.target.value,
      valid: e.target.value.length > 0 ? validator.isValidEmail(e.target.value) : null
    })
  }

  const changePassword = e => {
    setPassword({
      value: e.target.value,
      valid: e.target.value.length > 0 ? validator.isValidPassword(e.target.value) : null
    })
  }

  const submit = () => {
    if (email.valid && password.valid && onSubmit) {
      onSubmit({email: email.value, password: password.value});
    }
  };

  return (
    <form>
      <div className="form-row fixed-form-row-100">
        <div className="col">
          <label htmlFor="validationServerUsername">Email</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend3">@</span>
            </div>
            <input type="text" className={'form-control' + (email.valid !== null ? (email.valid ? ' is-valid' : ' is-invalid') : '')}
                   placeholder="Email" required onChange={changeEmail} value={email.value}/>
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
          </div>
        </div>
      </div>
      <div className="form-row fixed-form-row-100">
        <div className="col">
          <label htmlFor="validationServer03">Password</label>
          <input type="password" className={'form-control' + (password.valid !== null ? (password.valid ? ' is-valid' : ' is-invalid') : '')}
                 placeholder="Password" required onChange={changePassword} value={password.value}/>
            <div className="invalid-feedback">
              Please provide a valid password.
            </div>
        </div>
      </div>
      <div className="form-row">
        <button disabled={!(email.valid && password.valid)} onClick={submit}
                className={"btn btn-outline-success ml-auto" + ((email.valid && password.valid ? '' : ' disabled'))}>
          Submit form
        </button>
        <CircleLoaderSuccess />
      </div>
    </form>
  )
}

export default LoginForm;