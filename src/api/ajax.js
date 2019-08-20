import axios from 'axios'
import qs from 'qs'

//请求拦截器
  axios.interceptors.request.use((config) => {
    const {method, data} = config  
    // 如果是携带数据的post请求, 进行处理
    if (method.toLowerCase()==='post' && data && typeof data==='object') {
      config.data = qs.stringify(data)
    }
    return config;
  });

  //响应拦截器
  axios.interceptors.response.use(response => {
    // 返回response中的data数据, 这样请求成功的数据就是data了
    return response.data
  }, error => {// 请求异常
    console.log(error)
    return new Promise(() => {})  // 中断promise链
  })

export default axios