// import axios from 'axios'
// function httpForList () {
//   return axios({
//     url: 'https://m.maizuo.com/gateway?cityId=340800&pageNum=1&pageSize=10&type=1&k=6752560',
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16549331621220685540098049","bc":"340800"}',
//       'X-Host': 'mall.film-ticket.film.list',
//     }
//   })
// }

// function httpForDetail (params) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?filmId=params${params}&k=9103380`,
//     headers: {
//       'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"16549331621220685540098049"}`  ,
//       'X-Host': 'mall.film-ticket.film.info',
//     }
//   })
// }

// export default {
//   httpForList,
//   httpForDetail
// }
import axios from 'axios'
import { Toast } from 'vant'
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info':
    '{"a":"3000","ch":"1002","v":"5.2.0","e":"16549331621220685540098049","bc":"340800"}'
  }
})

http.interceptors.request.use(function (config) {
  // Do something before request is sent
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Toast.clear()
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})
export default http
