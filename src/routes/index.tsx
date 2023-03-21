import { lazy } from 'react'

import { MailOutlined, SettingOutlined } from '@ant-design/icons'

// const LayoutCom = lazy(() => import('../Layout/Layout'))
// const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'))
// const Login = lazy(() => import('../pages/Login/Login'))
// const Main = lazy(() => import('../pages/Main/Main'))
// const Role = lazy(() => import('../pages/Role/Role'))
// const User = lazy(() => import('../pages/User/User'))
// const Menu = lazy(() => import('../pages/Menu/Menu'))
// const Column = lazy(() => import('../pages/Column/Column'))
// const Category = lazy(() => import('../pages/Category/Category'))
// const Error = lazy(() => import('../pages/Error/404'))

import LayoutCom from '../Layout/Layout'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import Role from '../pages/Role/Role'
import User from '../pages/User/User'
import Menu from '../pages/Menu/Menu'
import Category from '../pages/Category/Category'
import Column from '../pages/Column/Column'
import Error from '../pages/Error/404'

const routes = [
  {
    path: '/',
    label: '首页',
    element: (
      <LayoutCom>
        <Dashboard />
      </LayoutCom>
    ),
    icon: <MailOutlined />,
    needAuth: true,
  },
  {
    path: '/login',
    label: '登录',
    icon: <MailOutlined />,
    element: <Login />,
    needAuth: false,
  },
  {
    path: '/main',
    label: '系统管理',
    icon: <SettingOutlined />,
    element: <LayoutCom />,
    needAuth: true,
    children: [
      { path: 'role', label: '角色管理', icon: <SettingOutlined />, element: <Role />, needAuth: true },
      { path: 'user', label: '用户管理', icon: <SettingOutlined />, element: <User />, needAuth: true },
      { path: 'menu', label: '菜单管理', icon: <SettingOutlined />, element: <Menu />, needAuth: true },
    ],
  },
  {
    path: '/other',
    label: '其他内容',
    icon: <SettingOutlined />,
    element: <LayoutCom />,
    needAuth: true,
    children: [
      { path: 'category', label: '分类管理', icon: <SettingOutlined />, element: <Category />, needAuth: true },
      { path: 'column', label: '栏目管理', icon: <SettingOutlined />, element: <Column />, needAuth: true },
    ],
  },
  {
    path: '*',
    label: '404',
    icon: <SettingOutlined />,
    element: <Error />,
    needAuth: false,
  },
]

export default routes
