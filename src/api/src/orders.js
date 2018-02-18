import axios from 'axios'
import { options } from './config'

export const createOrders = data => {
  const url = '/orders'
  return axios.post(url, data, Object.assign({}, options))
}
