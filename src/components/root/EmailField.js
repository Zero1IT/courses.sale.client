import React, {useState} from "react";
import mValidators from "../../js/validations"

function EmailField() {
  const [email, setEmail] = useState("");

  const onChange = event => {
    setEmail(event.target.value);
  };

  return (
    <div className="form-group">
      <div className="input-group has-validation">
        <div className="input-group-prepend">
          <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" id="mail" value={email} onChange={onChange} placeholder="Электронная почта"
               className={"form-control" + (!email || mValidators.isValidEmail(email) ? "" : " is-invalid")} />
        <div className="invalid-feedback">Invalid Email</div>
      </div>
    </div>
  )
}

export default EmailField;