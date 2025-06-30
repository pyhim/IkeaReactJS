import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import "/src/styles/AccountFormModal.scss"

export function AccountFormModal() {
  const [show, setShow] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  function handleShowPassword(e) {
    e.preventDefault();

    setPasswordInputType(passwordInputType === "password" ? "text" : "password");
  }

  return (
    <div>
      <Button variant="dark" onClick={handleShow}>Login</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Login</Modal.Header>
        <Modal.Body>
          <form className="container d-flex flex-column" id="accountFormModal">
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
                <input className="form-control" type={passwordInputType} name="password" id="passwordInput"/>
                <button className="position-absolute align-self-center" id="showPassword" onClick={handleShowPassword}>
                  <img src="/showPassword.svg" alt="show"/>
                </button>
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
        </Modal.Body>
      </Modal>
    </div>
  )
}