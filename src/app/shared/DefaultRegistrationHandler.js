import React, {useCallback} from "react";
import RegistrationForm from "../components/RegistrationForm";
import {SubmissionError} from "redux-form";
import AuthService from "../../js/services/AuthService";
import {useHistory} from "react-router-dom";

function DefaultRegistrationHandler({className, onRegistered}) {
  const history = useHistory();

  const submit = useCallback(async (values, _, form) => {
    try {
      const authData = Object.assign({}, values);
      await AuthService.registration(authData);
      form.destroy();
      if (onRegistered) {
        onRegistered(authData.email);
      } else {
        history.push("/login", {successEmail: authData.email});
      }
    } catch (e) {
      throw new SubmissionError(e.response?.fieldMessage || {});
    }
  }, [history, onRegistered]);

  return <RegistrationForm className={className} onSubmit={submit} />
}

export default DefaultRegistrationHandler;