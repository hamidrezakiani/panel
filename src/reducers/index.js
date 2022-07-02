import { combineReducers } from "redux"
import authReducers from "./authReducers"
import siteReducers from "./siteReducers"
const allReducers = combineReducers({
  auth: authReducers,
  site: siteReducers,
})

export default allReducers