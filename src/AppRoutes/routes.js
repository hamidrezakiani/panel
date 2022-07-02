import React from 'react'

const Home = React.lazy(() => import('../pages/Home'))
const Services = React.lazy(() => import('../pages/Services'))
const Orders = React.lazy(() => import('../pages/User/Orders'))
const Dashboard = React.lazy(() => import('../pages/User/Dashboard'))
const Profile = React.lazy(() => import('../pages/User/Profile'))
const Tickets = React.lazy(() => import('../pages/User/Tickets'))
const Transactions = React.lazy(() => import('../pages/User/Transactions'))


const routes = [
  /* path: 'home', name: 'home',element:Home, auth:false */
  { path: '/', name: 'home',element:Home ,auth:false},
  { path: 'services', name: 'services', element: Services, auth:false  },
  
  //auth
  { path: 'dashboard', name: 'dashboard', element:Dashboard, auth:true },
  { path: 'orders', name: 'orders', element:Orders,auth:true},
  { path: 'profile', name: 'profile',element:Profile,auth:true},
  { path: 'tickets', name: 'tickets', element:Tickets,auth:true },
  { path: 'transactions', name: 'transactions', element:Transactions,auth:true },

]

export default routes
