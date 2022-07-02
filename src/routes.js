import React from 'react'

const Home = React.lazy(() => import('./pages/Home'))
const Orders = React.lazy(() => import('./pages/User/Orders'))
const Dashboard = React.lazy(() => import('./pages/User/Dashboard'))
const Profile = React.lazy(() => import('./pages/User/Profile'))
const Tickets = React.lazy(() => import('./pages/User/Tickets'))
const Transactions = React.lazy(() => import('./pages/User/Transactions'))
const Services = React.lazy(() => import('./pages/Services'))
const Login = React.lazy(() => import('./pages/Login'))
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout/DefaultLayout'))
const routes = [
  { path: '/home', name: 'home',element:Home , layout: DefaultLayout},
  { path: '/login', name: 'login', element: Login , auth: false},
  { path: '/services', name: 'services', element: Services , layout: DefaultLayout },

//user routes
  { path: '/dashboard', name: 'dashboard', auth: true , element:Dashboard , layout: DefaultLayout},
  { path: '/orders', name: 'orders', auth: true , element:Orders , layout: DefaultLayout},
  { path: '/profile', name: 'profile', auth: true , element:Profile , layout: DefaultLayout},
  { path: '/tickets', name: 'tickets', auth: true , element:Tickets , layout: DefaultLayout},
  {/* path: '/transactions', name: 'transactions', auth: true , element:Transactions , layout: DefaultLayout*/},


]

export default routes
