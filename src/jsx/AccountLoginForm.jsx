import {useState} from "react";
import "/src/styles/AccountLoginForm.scss"

export function AccountLoginForm() {
  const [formState, setFormState] = useState({email: "", password: ""});

  function handleFormSubmit(e) {
    e.preventDefault();


  }

  return (
    <div className="container d-flex">
      <div className="d-flex container position-relative" id="img-panel">
        <img src="/formSideImage.png" alt="image"/>
        <p className="fw-semibold fs-32px position-absolute">Enter login to your account</p>
        <img src="/arrowLeft.svg" alt="arrowLeft" className="position-absolute" id="arrowBack"/>
      </div>
      <form className="container d-flex flex-column" onSubmit={handleFormSubmit} id="accountLoginForm">
        <div className="form-element">
          <label htmlFor="emailInput">Email Address or Phone Number</label>
          <input className="form-control" type="email" name="email" id="emailInput"/>
          <p id="emailHelp">
            By entering your mobile number and one-time code sign-in option,
            you agree to receive a one-time verification code via SMS from IKEA.
            Message and data rates may apply.
          </p>
          <p className="text-decoration-underline pt-1">More info about Privacy Policy</p>
        </div>
        <div className="form-element">
          <label htmlFor="passwordInput">Password</label>
          <span className="position-relative d-flex pb-2">
            <input className="form-control" type="password" name="password" id="passwordInput"/>
            <img className="position-absolute align-self-center" src="/showPassword.svg" alt="show" id="showPassword"/>
          </span>
          <p className="fw-semibold text-decoration-underline" id="forgotPassword">Forgot your password?</p>
        </div>
        <div className="form-element d-flex flex-column">
          <span className="d-flex align-content-center pb-3">
            <input type="checkbox" name="saveInfoCheckbox" id="saveInfoCheckbox"/>
            <label className="ps-4 fw-normal gray" htmlFor="saveInfoCheckbox">Save Information</label>
            <img id="infoIcon" src="/infoSmall.svg" alt="info"/>
          </span>
          <a className="btn btn-dark fw-semibold" href="#" id="continueButton">CONTINUE</a>
        </div>
        <div className="form-element d-flex flex-column">
          <p className="fw-semibold text-black fs-14px pb-3">Don't have an account yet? Create it:</p>
          <a className="btn btn-outline-dark fw-semibold border-2" href="#" id="createButton">CREATE AN ACCOUNT</a>
        </div>
      </form>
    </div>
  );
}