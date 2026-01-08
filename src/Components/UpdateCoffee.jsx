import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, test, price, details, photo } = coffee;

//   for navigate
const navigate = useNavigate()

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    Swal.fire({
      title: "Are you sure?",
      text: "You want to update this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-kappa-steel.vercel.app/coffees/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              Swal.fire({
                title: "Updated!",
                text: "Your product is updated.",
                icon: "success",
              });
              navigate(`/coffees/${_id}`)
            }
          });
      }
    });
  };

  return (
    <div>
      <Link to={"/"} className="btn my-6">
        Back to home
      </Link>

      <div className="text-center space-y-6 p-24 bg-[#F4F3F0]">
        <div className="px-18 space-y-6">
          <h2 className="text-5xl font-bold">Update existing coffee</h2>
          <p className="text-xl">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input w-full"
                placeholder="quantity"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full"
                placeholder="Supplier name"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Test</label>
              <input
                type="text"
                name="test"
                defaultValue={test}
                className="input w-full"
                placeholder="Test type"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input w-full"
                placeholder="price"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full"
                placeholder="Details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset border-base-300 rounded-box  border my-5 p-4">
            <label className="label text-black">Photo URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full"
              placeholder="photo url"
            />
          </fieldset>
          <div className="mx-4">
            <input
              className="btn btn-block"
              type="submit"
              value="Update coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
