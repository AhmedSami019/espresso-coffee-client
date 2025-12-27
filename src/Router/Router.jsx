import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";

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
                path: '/addCoffee',
                Component: AddCoffee
            }, 
            {
                path: 'updateCoffee',
                Component: UpdateCoffee
            }
        ]
    }
])