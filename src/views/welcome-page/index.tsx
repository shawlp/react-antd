import React, { FC } from 'react'
import { Result } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

type IProps = {
  title: string
}

const Welcome: FC<IProps> = ({ title }) => {
  return <Result icon={<SmileOutlined />} title={title} />
}

export default Welcome
