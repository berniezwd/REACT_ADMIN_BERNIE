import React from 'react'
import { Outlet } from 'react-router-dom'
export default function About() {
  return (
    <div>
      关于页面的子路由
      <Outlet />
    </div>
  )
}
