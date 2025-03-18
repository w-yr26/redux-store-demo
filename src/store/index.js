import { configureStore } from '@reduxjs/toolkit'
import tasksSliceReducer from './slices/tasksSlice'
export default configureStore({
  reducer: {
    task: tasksSliceReducer,
  },
})
