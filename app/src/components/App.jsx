 import { Users } from "./Users"
 import { UserPage } from "./UserPage"
 import ErrorPage404 from './ErrorPage404';
 import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { AddUser } from "./AddUser";
import { UpdateUser } from "./UpdateUser";

 export const App = () => {
    const router = createBrowserRouter([
        { path: '/', element: <Users />},
        { path: '/user/:id', element: <UserPage />},
        { path: '/add', element: <AddUser />},
        { path: '/add', element: <AddUser />},
        { path: '/update/:id', element: <UpdateUser />},
    ])

    return (
        <RouterProvider router={router} />
    )
 }
