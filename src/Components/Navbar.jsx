import React from 'react';
import logo from "../assets/more/logo1.png"

const Navbar = () => {
    return (
        <div className='flex justify-center items-center gap-8 p-5 bg-[#643e38]'>
            <img className='w-10' src={logo} alt="" />
            <h2 className='font-bold text-white'>Espresso coffee</h2>
        </div>
    );
};

export default Navbar;