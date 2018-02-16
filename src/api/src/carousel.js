import axios from 'axios'
import { options } from './config'

export const getCarousel = data => {
  const url = '/carousel'
  return axios.get(url, Object.assign({}, options, { params: data }))
}
