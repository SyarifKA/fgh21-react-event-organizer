import React from 'react'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import EventDetail from './pages/EventDetail'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist"
import OrderTickets from './pages/OrderTickets'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import ChangePass from './pages/ChangePass'
import MyBooking from './pages/MyBooking'
import MyWishlist from './pages/MyWishlist'
import CreateEvent from './pages/CreateEvent'
import SignUpPage from './pages/SignUp'
import CreatePopUp from './components/CreatePopUp'

let persistor = persistStore(store)
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
        path: '/events/:id',
        element: <EventDetail />
    },
    {
        path: '/events/section/:id',
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
    {
        path: '/signUp',
        element: <SignUpPage />
    },
]

const router = createBrowserRouter(arrayRouter)
function App() {
    return (
        // <Provider store={store}>
        //     <RouterProvider router={router} />
        // </Provider>
        <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />; 
        </PersistGate>
      </Provider>
    )

}

export default App