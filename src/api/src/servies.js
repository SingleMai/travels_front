import axios from 'axios'
import { options } from './config'

export const getServiesById = data => {
  const url = '/servie'
  return axios.get(url, Object.assign({}, options, { params: data }))
}
