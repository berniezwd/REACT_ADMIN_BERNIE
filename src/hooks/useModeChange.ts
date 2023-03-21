import { useDispatch, useSelector } from 'react-redux'
import { setModeColor } from '../store/modeSlice/modeSlice'

export default function useModeChange() {
  const { modeColor } = useSelector((state: any) => state.modeSlice)
  const dispatch = useDispatch()
  function setModeFn(value?: boolean) {
    dispatch(setModeColor(value ? 'dark' : 'light'))
  }
  return {
    modeColor,
    setModeFn,
  }
}
