import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {

    const {createUserWithEmail} =  use(AuthContext)

    // create use handler function
    const handleCreateUser = (e) =>{
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const email = formData.get("email")
        const password = formData.get("password")

        createUserWithEmail(email, password)
        .then(result => console.log(result))
        .catch(error => {
            console.log(error.code);
        })
    }

  return (
    <div className="card bg-base-100 max-w-md mx-auto shrink-0 shadow-2xl mt-15">
        <h2 className="text-4xl font-extrabold text-center mb-5">Sign Up now</h2>
      <div className="card-body">
        <form onSubmit={handleCreateUser} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input w-full" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
