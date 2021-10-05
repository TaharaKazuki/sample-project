import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState
} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { State } from '../type'
import './App.css'

const App = () => {
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
