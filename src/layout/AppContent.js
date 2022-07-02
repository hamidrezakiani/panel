import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import PropTypes from 'prop-types'

// routes config


const AppContent = (props) => {
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
                  element={<route.element errorHandler={(err) => props.errorHandler(err)}/>}
                />
              )
            )
          })}
        </Routes>
      </Suspense>
    
  )
}
AppContent.propTypes = {
  routes: PropTypes.array,
}
export default React.memo(AppContent)
