import React, { FC, lazy } from 'react'
import { PartialRouteObject } from 'react-router'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@views/home'))
const Demo = lazy(() => import('@views/demo'))
const NotFound = lazy(() => import('@views/not-found'))
const Layout = lazy(() => import('@views/layout'))
const Welcome = lazy(() => import('@views/welcome-page'))
const LoginPage = lazy(() => import('@views/login'))

const routerList: PartialRouteObject[] = [
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome title="欢迎来到运营管理平台！" />
      },
      {
        path: '/home/list',
        element: <Home />
      },
      {
        path: '/home/demo',
        element: <Demo />
      },
      {
        path: '/demo/list',
        element: <Demo />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]

const RenderRouter: FC = () => {
  const element = useRoutes(routerList)

  return element
}

export default RenderRouter
