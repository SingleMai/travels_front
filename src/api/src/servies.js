import axios from 'axios'
import { options } from './config'

export const getServiesById = data => {
  const url = '/servie'
  return axios.get(url, Object.assign({}, options, { params: data }))
}

export const getServiesType = data => {
  const url = '/servies/type'
  return axios.get(url, Object.assign({}, options))
}

export const createServies = data => {
  const url = '/servie'
  return axios.post(url, data, Object.assign({}, options))
}
