import axios from 'axios'
import { options } from './config'

export const getOrdersBook = () => {
  const url = '/user/orders/book'
  return axios.get(url, Object.assign({}, options))
}

export const createOrders = data => {
  const url = '/orders'
  return axios.post(url, data, Object.assign({}, options))
}
