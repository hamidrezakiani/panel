import React from 'react'


const Orders = React.lazy(() => import('../pages/Admin/Orders'))
const Dashboard = React.lazy(() => import('../pages/Admin/Dashboard'))
const Services = React.lazy(() => import('../pages/Admin/Services'))
const Tickets = React.lazy(() => import('../pages/Admin/Tickets'))
const Transactions = React.lazy(() => import('../pages/Admin/Transactions'))


const routes = [
  
  //auth
  { path: 'dashboard', name: 'dashboard', element:Dashboard, auth:true },
  { path: 'orders', name: 'orders', element:Orders,auth:true},
  { path: 'services', name: 'services',element:Services,auth:true},
  { path: 'tickets', name: 'tickets', element:Tickets,auth:true },
  { path: 'transactions', name: 'transactions', element:Transactions,auth:true },

]

export default routes

