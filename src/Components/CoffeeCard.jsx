import { Eye, Pencil, Trash } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, name, price, quantity, photo } = coffee;
    
    // for navigation
    const navigate = useNavigate()

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deletion
        fetch(`http://localhost:3003/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete ", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted",
                icon: "success",
              });
            }
          });
      }
    });
  };

//   to see coffee details
const handleViewDetails = (id)=> {
    navigate(`/coffees/${id}`)
}

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
            <button
              onClick={() => handleViewDetails(_id)}
              className="btn join-item bg-[#D2B48C]"
            >
              <Eye color="white" />
            </button>
            <button className="btn join-item bg-black">
              <Pencil color="white" />
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-500"
            >
              <Trash color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
