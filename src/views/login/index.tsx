import React, { FC } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Location } from 'history'
import LogoSvg from '@assets/logo.svg'

import styles from './index.less'

interface LoginParams {
  /** 用户名 */
  username: string
  /** 用户密码 */
  password: string
}

const initialValues: LoginParams = {
  username: 'guest',
  password: 'guest'
}

const Login: FC = () => {
  const navigate = useNavigate()
  const location = useLocation() as Location<{ from: string }>
  const onFinished = async (form: LoginParams) => {
    // const result = await loginMutation.mutateAsync(form)
    console.log('result: ', form)

    // if (result) {
    //   localStorage.setItem('token', result.token)
    //   localStorage.setItem('username', result.username)

    const from = location.state?.from || { pathname: '/welcome' }
    navigate(from)
    // }
  }
  return (
    <div className={styles.container}>
      <div className="top">
        <div className="header">
          <Link to="/">
            <img src={LogoSvg} className="logo" alt="svg" />
            <span className="title">运营管理平台</span>
          </Link>
        </div>
      </div>
      <div className="main">
        <Form<LoginParams> onFinish={onFinished} initialValues={initialValues}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
            <Input size="large" placeholder="用户名" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
            <Input type="password" size="large" placeholder="密码" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住用户</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button size="large" className="mainLoginBtn" htmlType="submit" type="primary">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
