import React, { useMemo } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import axios, { AxiosContext } from '@service/request'
import Errorboundary from '@components/error-boundary'
import RenderRouter from './routes'
import './App.less'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchInterval: false
    }
  }
})

const AxiosProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const axiosValue = useMemo(() => {
    return axios
  }, [])

  return <AxiosContext.Provider value={axiosValue}>{children}</AxiosContext.Provider>
}

const App: React.FC = () => {
  return (
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        <Errorboundary>
          <BrowserRouter>
            <RenderRouter />
          </BrowserRouter>
        </Errorboundary>
      </QueryClientProvider>
    </AxiosProvider>
  )
}

export default hot(module)(App)
