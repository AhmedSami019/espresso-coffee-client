import React from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import Header from './Header';
import { Coffee } from 'lucide-react';

const Home = () => {
    const coffees = useLoaderData()
    console.log(coffees);
    return (
        <div>
            <Header></Header>
            <section className='flex flex-col items-center gap-4 mt-5'>
                <h2 className='text-3xl font-medium'>Our popular products</h2>
                <Link to={'/addCoffee'} className='btn btn-warning text-white'>Add coffee <Coffee/></Link>
            </section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-15'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;