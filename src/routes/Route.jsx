import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import BookCard from "../components/book/BookCard";


export  const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
               index: true,
                element: <Home />
            },
            {
                path: "bookCard",
                Component: BookCard
            }

        ]
    }
])