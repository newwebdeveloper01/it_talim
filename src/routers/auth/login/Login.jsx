import React from 'react'

const Login = () => {
  return (
    <>
   

{/* <!-- Pills content --> */}
<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="text-center mb-3">
        <p>Sign in with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>

      <p className="text-center">or:</p>

      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input type="email" id="loginName" className="form-control" />
        <label className="form-label" for="loginName">Email or username</label>
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input type="password" id="loginPassword" className="form-control" />
        <label className="form-label" for="loginPassword">Password</label>
      </div>

      {/* <!-- 2 column grid layout --> */}
      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div className="form-check mb-3 mb-md-0">
            <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label className="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

      {/* <!-- Register buttons --> */}
      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div>
    </form>
  </div>
 
</div>
{/* <!-- Pills content --> */}
   </>
  )
}

export default Login
