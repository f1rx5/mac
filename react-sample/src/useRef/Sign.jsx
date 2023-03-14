import React,{useRef} from "react";

const Sign = () => {
    let passRef=useRef()
    let passHandler=(event)=>{
        event.preventDefault()
        
    }
  return (
    <div className="card">
      <div className="card-header">
        <h4>Sign</h4>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Email" className="form-control" />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              ref={passRef}
            />
            <div className="input-group-addon">
              <button onClick={passHandler} className="form-control">
                <i class="fa fa-eye-slash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="submit" value="Login" className="btn btn-success" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
