import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import Root from './routes/Root.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import Auth from './routes/Auth.tsx'
import Login from './routes/Login.tsx'
import SignUp from './routes/SignUp.tsx'


const router = createBrowserRouter([{
  path:'/',
  errorElement:<ErrorPage />,
  element:<Root />,
} , {
  path:'auth',
  errorElement:<ErrorPage />,
  element:<Auth />,
  children:[{
    path:'/auth/login',
    element:<Login />
  },
  {
    path:'/auth/signup',
    element:<SignUp />
  }
]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
