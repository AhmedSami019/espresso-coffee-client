import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUserWithEmail } = use(AuthContext);

  // create use handler function
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { password, ...userProfile } = Object.fromEntries(formData.entries());

    const email = formData.get("email");
    console.log(email, password, userProfile);

    createUserWithEmail(email, password)
      .then((result) => {
        console.log(result);
        fetch("http://localhost:3003/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "account created successfully",
                icon: "success",
                timer: 1500,
              });
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="card bg-base-100 max-w-md mx-auto shrink-0 shadow-2xl mt-15">
      <h2 className="text-4xl font-extrabold text-center mb-5">Sign Up now</h2>
      <div className="card-body">
        <form onSubmit={handleCreateUser} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Your name"
          />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input w-full"
            placeholder="Address"
          />
          <label className="label">Phone</label>
          <input
            type="number"
            name="phone"
            className="input w-full"
            placeholder="Phone number"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Photo URL"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
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
