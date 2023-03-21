import { createSlice } from '@reduxjs/toolkit'

const modeSlice = createSlice({
  name: 'modeSlice',
  initialState: {
    modeColor: 'dark',
    collapsed: localStorage.getItem('modeSlice-collapsed') === 'true' ? true : false,
  } as Golbal.IMode,
  reducers: {
    setModeColor(state, action) {
      state.modeColor = action.payload
    },
    setCollapsed(state, action) {
      state.collapsed = action.payload
      localStorage.setItem('modeSlice-collapsed', action.payload.toString())
    },
  },
})

export const { setModeColor, setCollapsed } = modeSlice.actions
export default modeSlice
