import React, { useEffect, useState } from 'react'
import useCustomFetch from '../../utils'

function mockFetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}
export default function Role() {
  const res = useCustomFetch(mockFetch)
  const [data, setData] = useState({
    imgUrl: '',
    title: '',
    desc: '',
  })
  useEffect(() => {
    // 避免无意义的重复渲染
    if (res !== null) {
      setData(res)
    }
  }, [res])
  return <div>角色管理</div>
}
