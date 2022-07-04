import React, { Fragment, useState ,useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import Loading from '../../../components/Loading'
import Order from './Order'
import AxiosApi from '../../../axios/AxiosApi'
const Orders = () => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)
  const [orders,setOrders] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    AxiosApi.get('agent/products',{params:{flag:'all'}})
      .then((response) => {
        //setOrders(response.data.data)
        setLoading(false)
      })
  }, []);
  const content = loading ? <Loading /> : (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>user name</th>
          <th>product name</th>
          <th>count</th>
          <th>amount</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map((order,index) => {
            <Order key={order.id} order={order} index={index} />
          })
        }
      </tbody>
    </table>
  )

  return <Fragment>
     {content}
  </Fragment>
}

export default Orders