import React from 'react';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    const {name, supplier, test, price, photo, quantity} = coffee
    return (
        <div className='w-10/12 mx-auto'>
          <Link to={'/'} className="btn my-6">Back to home</Link>
          <div className='flex flex-col md:flex-row gap-5 justify-around items-center bg-[#F4F3F0] p-22 '>
            <aside >
                <img src={photo} alt="coffee" />
            </aside>
            <aside>
                <h2 className="text-4xl font-bold mb-5">{name}</h2>
                <p className='text-lg'> <span className="font-medium">Test</span> : {test}</p>
                <p className='text-lg'> <span className="font-medium">Quantity</span> : {quantity}</p>
                <p className='text-lg'> <span className="font-medium">Price</span> : {price}</p>
                <p className='text-lg'> <span className="font-medium">Supplier</span> : {supplier}</p>
            </aside>
          </div>
        </div>
    );
};

export default CoffeeDetails;