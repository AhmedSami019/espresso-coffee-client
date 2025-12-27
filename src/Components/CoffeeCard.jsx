import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, price, quantity, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-sm border">
      <figure className="w-4/12">
        <img src={photo} className="w-full p-4" alt="coffee" />
      </figure>
      <div className="flex w-full justify-around items-center">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Quantity : {quantity}</p>
          <p>Price : {price}</p>
        </div>
        <div className="justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">Button</button>
            <button className="btn join-item">Button</button>
            <button className="btn join-item">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
