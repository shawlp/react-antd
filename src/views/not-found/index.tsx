import { Button, Result } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound: FC = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle="not found"
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          返回
        </Button>
      }
    />
  )
}

export default NotFound
