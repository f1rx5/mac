import React, { useRef } from "react";
import Sign from "./Sign";

const Login = () => {
  let btnRef = useRef();
  let checkHandler = (event) => {
    btnRef.current.disabled = !event.target.checked;
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="checkbox"
                      className="form-control-check"
                      onChange={checkHandler}
                    />{" "}
                    Please accept terms & conditions
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-success"
                    ref={btnRef}
                    disabled
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Sign />
        </div>
      </div>
    </div>
  );
};

export default Login;
