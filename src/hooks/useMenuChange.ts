import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useMenuRender } from './useMenuRender'

export default function useMenuChange() {
  const { pathname } = useLocation()
  const { MenuItems } = useMenuRender()
  const [openParentKey, setOpenParentKey] = useState<string[]>([])
  const [openChildKey, setOpenChildKey] = useState<string[]>([])
  useEffect(() => {
    let arr: string[] = []
    MenuItems.forEach((item: any) => {
      if (pathname.includes(item.key)) {
        arr.push(item.key)
      }
      if (item.children && item.children.length > 0) {
        item.children.forEach((child: any) => {
          if (pathname === child.key) {
            arr.push(child.key)
            setOpenChildKey([child.key])
          }
        })
      } else {
        setOpenChildKey([item.key])
      }
    })
    arr.shift()
    setOpenParentKey(arr)
  }, [pathname])

  return {
    MenuItems,
    openParentKey,
    openChildKey,
    setOpenParentKey,
    setOpenChildKey,
  }
}
