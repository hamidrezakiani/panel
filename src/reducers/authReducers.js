const initialState = {
  auth :{
    check: Boolean(localStorage.getItem('user')),
    user:JSON.parse(localStorage.getItem('user')),
  }
}

const Login = 'Login'
const Logout = 'Logout'

export default function(state = initialState, action) {
  switch (action.type) {
    case Login:
      return {
        auth: {
          check: true,
          user: action.data,
        }
      }
    case Logout:
      return {
        auth: {
          check: false,
          user:null,
        }
      }
    default:
      return state
  }
}