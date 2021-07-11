import React, { FC } from 'react'
import { Spin } from 'antd'

const SuspendFallbackLoading: FC = () => {
  return <Spin tip="加载中..." />
}

export default SuspendFallbackLoading
