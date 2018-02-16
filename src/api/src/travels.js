import axios from 'axios'
import { options } from './config'

export const getTravels = data => {
  const url = '/travels'
  return axios.get(url, Object.assign({}, options, { params: data }))
}

export const createTravels = (data) => {
  const url = '/travels'
  return axios.post(url, data, Object.assign({}, options))
}

export const createComment = (data) => {
  const url = '/travels/comment'
  return axios.post(url, data, Object.assign({}, options))
}

export const createLikes = (data) => {
  const url = '/travels/likes'
  return axios.post(url, data, Object.assign({}, options))
}
