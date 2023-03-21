import React from 'react'
import { Layout } from 'antd'
import Loading from '../../components/Loading/Loading'
import { matchRoutes, Outlet } from 'react-router-dom'
import routes from '../../routes'
const { Content } = Layout

function LoadingCom() {
  return (
    // <Loading className="LoadingPage">
    <h2>页面加载中...</h2>
    // </Loading>
  )
}

export default function ContentBar(props: Golbal.IChildren) {
  const mathchs = matchRoutes(routes, location)

  // 判断是否是一级路由
  const isParent = mathchs?.every((item) => {
    const route = item.route
    return !route.children
  })

  return (
    <>
      <Content className="p-10 bg-gray-300 m-10">
        <React.Suspense fallback={<LoadingCom />}>{isParent ? props.children : <Outlet />}</React.Suspense>
      </Content>
    </>
  )
}
