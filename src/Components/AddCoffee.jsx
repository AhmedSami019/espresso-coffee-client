import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    // old method
    // const name = form.name.value
    // const chef = form.chef.value
    // const supplier = form.supplier.value
    // const test = form.test.value
    // const category = form.category.value
    // const details = form.details.value
    // console.log(name, chef, supplier, test, category, details);

    // new method
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    // console.log(newCoffee);

    // post fetch
    fetch("http://localhost:3003/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after add in mongodb", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="my-10">
      <Link to={'/'} className="btn my-6">Back to home</Link>
      <div className="text-center space-y-6 p-24 bg-[#F4F3F0]">
        <div className="px-18 space-y-6">
          <h2 className="text-5xl font-bold">Add new coffee</h2>
          <p className="text-xl">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="input w-full"
                placeholder="quantity"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full"
                placeholder="Supplier name"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Test</label>
              <input
                type="text"
                name="test"
                className="input w-full"
                placeholder="Test type"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Category</label>
              <input
                type="text"
                name="category"
                className="input w-full"
                placeholder="Category"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box  border p-4">
              <label className="label text-black">Details</label>
              <input
                type="text"
                name="details"
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
              className="input w-full"
              placeholder="photo url"
            />
          </fieldset>
          <div className="mx-4">
            <input className="btn btn-block" type="submit" value="Add coffee" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
