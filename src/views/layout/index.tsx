import React, { useState, FC, useEffect } from 'react'
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout'
import { MenuUnfoldOutlined, MenuFoldOutlined, SmileOutlined, HeartOutlined, FrownOutlined } from '@ant-design/icons'
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom'
import menuList from './MenuConfig'
import RightTopContent from './components/RightTopContent'
import Footer from './components/Footer'
import './index.less'

const IconMap: { [key: string]: React.ReactNode } = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
  frown: <FrownOutlined />
}

const Layout: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)

  const loopMenuItem = (menus?: MenuDataItem[]): MenuDataItem[] => {
    if (!menus) return []

    const m = menus.map(({ icon, children, ...item }) => ({
      ...item,
      icon: icon && IconMap[icon as string],
      children: children && loopMenuItem(children)
    }))

    return m
  }
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/welcome')
    }
  }, [navigate, location])
  return (
    <ProLayout
      fixSiderbar
      className="fullHeight"
      location={{
        pathname: location.pathname
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: '首页'
        },
        ...routers
      ]}
      menuDataRender={() => loopMenuItem(menuList)}
      menuItemRender={(item: any, dom: any) => {
        if (item.isUrl || !item.path || location.pathname === item.path) {
          return dom
        }
        return <Link to={item.path}>{dom}</Link>
      }}
      itemRender={(route, _params, routes, paths) => {
        const first = routes.indexOf(route) === 0
        return first ? <Link to={paths.join('/')}>{route.breadcrumbName}</Link> : <span>{route.breadcrumbName}</span>
      }}
      collapsedButtonRender={false}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      rightContentRender={() => <RightTopContent />}
      headerContentRender={() => {
        return (
          <div onClick={() => setCollapsed(!collapsed)} className="menuFold">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        )
      }}
      footerRender={() => <Footer title="2021 xx科技出品" />}
    >
      <Outlet />
    </ProLayout>
  )
}

export default Layout
