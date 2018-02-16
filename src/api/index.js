import axios from 'axios'
import * as Travels from 'api/src/travels'
import * as Users from 'api/src/users'
import * as Carousel from 'api/src/carousel'

export const TravelsApi = Travels
export const UsersApi = Users
export const CarouselApi = Carousel

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  const data = response.data

  // 根据返回的code值来做不同的处理（和后端约定）
  switch (data.code) {
    case 1:
      // 这一步保证数据返回，如果没有return则会走接下来的代码，不是未登录就是报错
      return data.data

    default:
  }
  // 若不是正确的返回code，就抛出错误
  const err = new Error(data.message)

  err.data = data
  err.response = response

  throw err
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  const result = {}
  if (err && err.response) {
    switch (err.response.data.code) {
      case -1:
        result.message = '参数为空或者非法'
        break

      case -2:
        result.message = '新增内容已存在'
        break

      case -4000:
        result.message = '后台服务出错'
        break

      default: result.message = 'Interval Server Error'
    }
  }
  return Promise.reject(result)
})
