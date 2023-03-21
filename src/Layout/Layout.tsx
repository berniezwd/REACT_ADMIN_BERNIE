import React from 'react'
import { Layout } from 'antd'
import SiderBar from './SiderBar/SiderBar'
import HeaderBar from './HeaderBar/HeaderBar'
import ContentBar from './ContentBar/ContentBar'

export default function LayoutCom(props: Golbal.IChildren) {
  return (
    <Layout className="min-h-screen">
      <SiderBar />
      <Layout>
        <HeaderBar />
        <ContentBar>{props.children}</ContentBar>
      </Layout>
    </Layout>
  )
}
