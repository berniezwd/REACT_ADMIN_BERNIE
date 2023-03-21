import { matchRoutes, Navigate, useLocation, useRoutes } from 'react-router-dom'
import routes from '../../routes'

export default function NeedAuth() {
  const outlet = useRoutes(routes)
  const location = useLocation()
  const mathchs = matchRoutes(routes, location)
  const isLogin = true

  // 重定向地址
  const preLocation = {
    pathname: location.pathname,
  }

  // 判断是否需要登录
  const isNeedLogin = mathchs?.some((item) => {
    const route = item.route
    if (!route.needAuth) return false
    return route.needAuth
  })

  // 判断是否登录
  if (isNeedLogin && !isLogin) {
    return <Navigate to={'/login'} replace state={preLocation} />
  }
  return <>{outlet}</>
}
