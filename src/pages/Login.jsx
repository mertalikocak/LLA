import React from "react";
import parrot from "../images/parrot.png";
import parrotreading from "../images/parrot-reading.png";

function Login() {
  return (
    <div className="bg-img">
      <header className="primary-header flex align-items-center">
        <div className="primary-header flex">
          <a
            href="/#"
            className="flex align-items-center justify-content-space-between"
          >
            <img src={parrot} alt="" width={50} height={50} />
            <h1 className="ff-header fs-750 gradient-text padding-left-1">
              Parrot
            </h1>
          </a>
        </div>
      </header>
      <div className="bg-neutral-800 login">
        <div className="container login-wrapper">
          <div className="row">
            <div className="flex col col-lg-6">
              <h1 className="ff-primary fs-700 padding-bt-3 text-neutral-100">
                Login
              </h1>
              <div className="padding-bt-2">
                <input
                  type="text"
                  name="username"
                  class="input ff-primary fs-400"
                  placeholder="E-mail"
                  autocomplete="off"
                  required
                />
              </div>
              <div className="padding-bt-2">
                <input
                  type="password"
                  name="password"
                  class="input ff-primary fs-400"
                  placeholder="Password"
                  required
                />
              </div>

              <div>
                <a href="/">
                  <button className="login-btn ff-primary">Login</button>
                </a>
              </div>
            </div>
            <div className="flex col col-lg-6 align-items-center">
              <img src={parrotreading} alt="" width={200} height={309} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
