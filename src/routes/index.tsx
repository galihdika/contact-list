import { Navigate, createBrowserRouter } from "react-router-dom";

import AppLayout from "../Layout";
import Contacts from "./contacts";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout footer/>,
    
    children: [
      {
        path: "/",
        element: <Navigate to={'/contacts'}/>
      },
      {
        path: '/contacts',
        element: <Contacts />,
        children: [
          {
            path: '/contacts/add/[id]',
            element: <div>Add Contact Page</div>
          },
          {
            path: '/contacts/edit/[id]',
            element: <div>Edit Contact Page</div>
          }
        ]
      },
    ]
  }
]);