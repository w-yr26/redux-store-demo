import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeTask, doneTask, addTask } from './store/slices/tasksSlice'
import { useRef } from 'react'

const App = () => {
  const taskList = useSelector((state) => state.task.taskList)
  const dispatch = useDispatch()
  const handleDel = (id) => {
    dispatch(removeTask(id))
  }
  const handleDone = (id) => {
    dispatch(doneTask(id))
  }

  const InputRef = useRef(null)
  const handleAdd = () => {
    console.log(InputRef.current.value)
    const newTask = {
      id: new Date().getTime(),
      name: InputRef.current.value,
      isFinish: false,
    }
    dispatch(addTask(newTask))
  }

  return (
    <>
      <h3>TODO LIST</h3>
      <div className="input-container">
        <input type="text" ref={InputRef} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="container">
        {taskList.map((item) => {
          return (
            <li
              className="item-box"
              key={item.id}
              style={{
                textDecoration: item.isFinish ? 'line-through' : '',
              }}
            >
              <span>{item.name}</span>
              <div>
                <button onClick={() => handleDel(item.id)}>删除</button>
                <button onClick={() => handleDone(item.id)}>
                  {' '}
                  {item.isFinish ? '未完成' : '完成'}{' '}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
