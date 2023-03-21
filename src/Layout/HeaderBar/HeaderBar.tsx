import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Avatar, Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCollapsed } from '../../store/modeSlice/modeSlice'
import { FullscreenOutlined } from '@ant-design/icons'
const { Header } = Layout

function IsCollapsed() {
  const { collapsed } = useSelector((state: any) => state.modeSlice)
  const dispatch = useDispatch()
  return (
    <>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={() => dispatch(setCollapsed(!collapsed))} />
      ) : (
        <MenuFoldOutlined onClick={() => dispatch(setCollapsed(!collapsed))} />
      )}
    </>
  )
}

const HeaderBar: React.FC = () => {
  const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'

  // 全屏事件
  function fullScreenEvent() {
    let element = document.documentElement
    if (element.requestFullscreen) {
      element.requestFullscreen()
    }
  }
  return (
    <>
      <Header className="bg-gray-200 px-20 flex items-center justify-between">
        <IsCollapsed />
        <div className="flex-1 flex items-center justify-end">
          <FullscreenOutlined className="mr-20 text-16 hover:cursor-pointer" onClick={fullScreenEvent} />
          <Avatar size={35} src={url} />
        </div>
      </Header>
    </>
  )
}

export default HeaderBar
