import React from 'react'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import EventDetail from './pages/EventDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OrderTickets from './pages/OrderTickets'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import ChangePass from './pages/ChangePass'
import MyBooking from './pages/MyBooking'
import MyWishlist from './pages/MyWishlist'
import CreateEvent from './pages/CreateEvent'
import CreatePopUp from './components/CreatePopUp'

const arrayRouter = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/detail',
        element: <EventDetail />
    },
    {
        path: '/order',
        element: <OrderTickets />
    },
    {
        path: '/payment',
        element: <Payment />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/changePassword',
        element: <ChangePass />
    },
    {
        path: '/myBooking',
        element: <MyBooking />
    },
    {
        path: '/myWishlist',
        element: <MyWishlist />
    },
    {
        path: '/createEvent',
        element: <CreateEvent />
    },
    {
        path: '/createPopUp',
        element: <CreatePopUp />
    },
]

const router = createBrowserRouter(arrayRouter)
function App() {
    return <RouterProvider router={router} />
        // <LoginPage />
        // <HomePage />
        // <EventDetail />

}

export default App