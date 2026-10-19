import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import ProductCard from "../pages/fakeApi/ProductCard"


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <ProductCard />
            }
        ]
    },
])