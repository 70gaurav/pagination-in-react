import React, { useState } from 'react';
import "../../App.css";
import open from "../../images/visible.png"
import close from "../../images/eyebrow.png"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function emailHandler(e) {
    setEmail(e);
  }

  function passwordHandler(e) {
    setPassword(e);
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="login">
      <div className="form-main">
        <form>
          <div>
            <div className="blank">
              <input
                type="email"
                value={email}
                required="required"
                onChange={(e) => emailHandler(e.target.value)}
              />
              <span>E-MAIL</span>
            </div>
          </div>

          <div>
            <div className="blank">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                required="required"
                onChange={(e) => passwordHandler(e.target.value)}
              />
              <span>PASSWORD</span>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle"
              >
                {showPassword ? (
                  <img src="eye-close-image.png" alt="Close Eye" />
                ) : (
                  <img src="eye-open-image.png" alt="Open Eye" />
                )}
              </button>
            </div>
          </div>

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
