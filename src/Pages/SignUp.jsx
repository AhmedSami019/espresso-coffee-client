import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {

    const {email} =  use(AuthContext)
    console.log(email);

    // create use handler function

  return (
    <div className="card bg-base-100 max-w-md mx-auto shrink-0 shadow-2xl mt-15">
        <h2 className="text-4xl font-extrabold text-center mb-5">Sign Up now</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  );
};

export default SignUp;
