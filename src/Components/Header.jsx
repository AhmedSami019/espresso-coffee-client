import React from "react";
import backgroundImg from "../assets/more/3.png";
import { Link } from "react-router";


const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="py-24 min-h-100 bg-cover bg-center bg-no-repeat grid grid-cols-1 md:grid-cols-2 gap-3"
    >
      <div></div>
      <div className="space-y-3 px-5">
        <h2 className="text-3xl font-bold text-white">
          Would you like a Cup of Delicious Coffee?
        </h2>
        <p className="text-white">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <div>
          <Link to={'/about'} className="btn">
              learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
