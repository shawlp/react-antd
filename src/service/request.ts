import { createContext, useContext } from 'react'
import Axios, { AxiosInstance } from 'axios'
import { notification } from 'antd'
import { createBrowserHistory } from 'history'
import { useQuery, useMutation } from 'react-query'

const history = createBrowserHistory()

const axios = Axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axios.interceptors.response.use(
  (response) => {
    const { data, status, statusText } = response
    if (status === 200) {
      return data
    }

    notification.error({
      message: `请求错误 ${statusText}: ${response}`,
      description: data || statusText || 'Error'
    })

    if (status === 401) {
      history.push('/login')
    }

    return Promise.reject(new Error(statusText || 'Error'))
  },
  (error) => {
    if (error.response && error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          history.push('/auth/login')
          break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          history.push('/auth/login')
          break
        // 404请求不存在
        case 404:
          notification.error({
            message: `请求不存在`,
            description: error.response.data.msg || 'Error'
          })
          break
        case 406:
          notification.error({
            message: `请求参数有误`,
            description: error.response.data.msg || 'Error'
          })
          break
        default:
          notification.error({
            message: `请求错误`,
            description: error.response.data.msg || 'Error'
          })
      }
    }

    console.log('error', error)
    // return Promise.reject(error)
  }
)

export const AxiosContext = createContext<AxiosInstance>(
  new Proxy(axios, {
    apply: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    },
    get: () => {
      throw new Error('You must wrap your component in an AxiosProvider')
    }
  })
)

export const useAxios = () => {
  return useContext(AxiosContext)
}

const useGetOne = <T>(key: string, url: string, params?: any) => {
  console.log('useGetOne')
  const axios = useAxios()
  const service = async () => {
    const data: T = await axios.get(`${url}`, params)
    console.log('data', data)
    return data
  }

  return useQuery(key, () => service())
}

const useCreate = <T, U>(url: string) => {
  const axios = useAxios()

  return useMutation(async (params: T) => {
    const data: U = await axios.post(`${url}`, params)
    return data
  })
}

const useUpdate = <T>(url: string) => {
  const axios = useAxios()

  return useMutation(async (params: T) => {
    const data: T = await axios.patch(`${url}`, params)
    return data
  })
}

const useDelete = <T>(url: string) => {
  const axios = useAxios()
  return useMutation(async (id: number) => {
    const data: T = await axios.delete(`${url}?id=${id}`)
    return data
  })
}

const useBatch = (url: string) => {
  const axios = useAxios()
  return useMutation(async (ids: number[]) => {
    const data = await axios.post(`${url}`, { idList: ids })
    return data
  })
}

export { useGetOne, useUpdate, useCreate, useDelete, useBatch }

export default axios
