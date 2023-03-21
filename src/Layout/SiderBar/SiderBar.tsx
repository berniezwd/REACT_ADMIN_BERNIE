import React from 'react'
import { Layout, Menu } from 'antd'
import useModeChange from '../../hooks/useModeChange'
import useMenuChange from '../../hooks/useMenuChange'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const { Sider } = Layout

export default function SiderBar() {
  const router = useNavigate()
  const { modeColor } = useModeChange()
  const { MenuItems, openParentKey, openChildKey, setOpenParentKey, setOpenChildKey } = useMenuChange()
  const { collapsed } = useSelector((state: { modeSlice: Golbal.IMode }) => state.modeSlice)

  // 点击父级菜单时触发
  function openParentChange(openKeys: string[]) {
    console.log('openKeys', openKeys)
    setOpenParentKey(openKeys)
  }
  // 点击子级菜单时触发
  function MenuItemClick({ key }: { key: React.Key }) {
    setOpenChildKey([key.toString()])
    router(key.toString())
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme={modeColor}>
      <div className="h-60  flex items-center justify-center text-gray-200">ReactAdmin</div>
      <Menu
        onClick={MenuItemClick}
        theme={modeColor}
        mode="inline"
        selectedKeys={openChildKey}
        openKeys={openParentKey}
        items={MenuItems}
        onOpenChange={openParentChange}
      />
    </Sider>
  )
}
