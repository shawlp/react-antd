import React, { FC, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import Loading from '@components/loading'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './App'

const AppCom: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ConfigProvider>
  )
}

ReactDOM.render(<AppCom />, document.getElementById('root'))
