import React, {Suspense} from "react"
import "./App.css"

//Router
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
// Redux
import { Provider , useDispatch, useSelector} from "react-redux"
import { createStore } from "redux"
import allReducers from "./reducers"
//Rputes
import AppRoutes from './AppRoutes/AppRoutes'

//Layoutes
import DefaultLayout from './layout/DefaultLayout'
import SiteLayout from './layout/SiteLayout'
import AdminLayout from './layout/AdminLayout'
import LoginModal from './components/LoginModal/LoginModal'
import AxiosApi from './axios/AxiosApi'
//let store = createStore(allReducers)

function App() {
  const { auth } = useSelector(state => state.auth)
  console.log(auth)
  return (
      <div className="App">
        <HashRouter>
          <Suspense>
            <Routes>
              <Route
                path="admin/*"
                element={
                (auth.check
                  &&auth.user.role == 'OWNER')?(
                  <AdminLayout />):(
                  <Navigate to="/home" replace />)
                }
              />
              <Route
                path="*"
                element={<SiteLayout />}
              />
            </Routes>
          </Suspense>
        </HashRouter>
        <LoginModal />
      </div>
  );
}

export default App;
