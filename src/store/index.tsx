import { configureStore } from '@reduxjs/toolkit'
import modeSlice from './modeSlice/modeSlice'

const store = configureStore({
  reducer: {
    modeSlice: modeSlice.reducer,
  },
})

export default store
