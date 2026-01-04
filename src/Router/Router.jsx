import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeeDetails from "../Components/CoffeeDetails";
import About from "../Pages/About";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                loader: ()=> fetch("http://localhost:3003/coffees"),
                Component: Home
            },
            {
                path: 'coffees/:id',
                loader: ({params})=> fetch(`http://localhost:3003/coffees/${params.id}`),
                Component: CoffeeDetails
            },
            {
                path: '/addCoffee',
                Component: AddCoffee
            }, 
            {
                path: 'updateCoffee/:id',
                loader: ({params})=> fetch(`http://localhost:3003/coffees/${params.id}`),
                Component: UpdateCoffee
            },
            {
                path: "about",
                Component: About
            }
        ]
    }
])