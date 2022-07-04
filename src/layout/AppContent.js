import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

// routes config


const AppContent = (props) => {
  const { auth } = useSelector(state => state.auth)
  console.log(auth)
  return (
    
      <Suspense>
        <Routes>
          {props.routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={
                    (route.auth && !auth.check) ? (
                      <Navigate to="/home" replace />
                    ) : (
                      <route.element />
                    )
                  }
                />
              )
            )
          })}
          <Route path="*" element={<p>404 test</p>} />
        </Routes>
      </Suspense>
    
  )
}
AppContent.propTypes = {
  routes: PropTypes.array,
}
export default React.memo(AppContent)
