import axios from 'axios'
import ErrorHandle from './ErrorHandle'
import store from '../store'
const instance = axios.create({
  baseURL: 'https://api.iraniad.com/representation',
  headers: {
    'Content-Type': 'application/json',
    //Authorization: 'Bearer ' + (auth.check ? auth.user.api_token : null),
  },
})

instance.interceptors.request.use(request => {
    const auth = store.getState().auth.auth
    const token = 'Bearer ' + (auth.check ? auth.user.api_token : null)
    request.headers.Authorization = token
    return request
}, error => {
    return Promise.reject(error)
});

instance.interceptors.response.use(response => {
    return response
}, error => {
    const errorHandle = new ErrorHandle()
    errorHandle.setError(error.response).handle()
    return Promise.reject(error)
});


export default instance
