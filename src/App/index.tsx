import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState
} from 'react'
import { v1 as uuid } from 'uuid'
import { Todo } from '../type'
import './App.css'

const todos: Todo[] = [
  {
    id: uuid(),
    desc: 'Learn React',
    isComplete: true
  },
  {
    id: uuid(),
    desc: 'Learn Redux',
    isComplete: true
  },
  {
    id: uuid(),
    desc: 'Learn Redux-ToolKit',
    isComplete: false
  }
]

const selectedTodoId = todos[1].id
const editedCount = 0

const App = () => {
  const [newTodoInput, setNewTodoInput] = useState<string>('')
  const [editTodoInput, setEditTodoInput] = useState<string>('')
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const editInput = useRef<HTMLInputElement>(null)

  const selectedTodo =
    (selectedTodoId && todos.find((todo) => todo.id === selectedTodoId)) || null

  const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodoInput(e.target.value)
  }

  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditTodoInput(e.target.value)
  }

  const handleSelectTodo = (todoId: string) => (): void => {}

  const handleEdit = (): void => {
    if (!selectedTodo) return

    setEditTodoInput(selectedTodo.desc)
    setIsEditMode(true)
  }

  return (
    <div className="App">
      <div className="App__counter">Todos Updated Count:</div>
      <div className="App_header">
        <h1>Todo: Redux vs RTK Edition</h1>
        <form onSubmit={}>
          <label htmlFor="new-todo">Add new:</label>
          <input onChange={} id="new-todo" value={} />
          <button type="submit">Create</button>
        </form>
      </div>

      <div className="App__body"></div>
    </div>
  )
}

export default App
