import axios from 'axios'
import store from '../store'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      token : `Bearer ${store.token}`
    }
  })
}

