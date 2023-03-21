import { useState, useEffect } from 'react'

function useCustomFetch(fetcher: Function) {
  // 传入一个真正获取数据的函数
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // 处理数据
    fetcher()
      .then((res: any) => {
        console.log('fetch', res)
        setData(res)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [fetcher])

  // 这里会在获取到数据之后才会置为 false，也就是才会返回数据
  if (loading) {
    throw Promise.resolve(null) // 这里抛出一个 Promise
  } else {
    return data
  }
}

export default useCustomFetch
