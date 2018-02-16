import axios from 'axios'
import { options } from './config'

export const updateUsersInfo = data => {
  const url = '/users'
  return axios.put(url, data, Object.assign({}, options))
}

export const getUsersInfo = data => {
  const url = '/user'
  return axios.get(url, Object.assign({}, options, { params: data }))
}
