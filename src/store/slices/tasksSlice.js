import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  taskList: [
    {
      name: 'task1',
      id: '01',
      isFinish: false,
    },
    {
      name: 'task2',
      id: '02',
      isFinish: true,
    },
  ],
}

const tasksSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask(state, action) {
      state.taskList.unshift(action.payload)
    },
    removeTask(state, { payload: id }) {
      state.taskList = state.taskList.filter((item) => item.id !== id)
    },
    doneTask(state, { payload: id }) {
      state.taskList = state.taskList.map((item) => {
        if (item.id !== id) return item
        return {
          ...item,
          isFinish: !item.isFinish,
        }
      })
    },
  },
})

export const { addTask, doneTask, removeTask } = tasksSlice.actions

export default tasksSlice.reducer
