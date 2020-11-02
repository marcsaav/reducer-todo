import React, { useReducer } from 'react'
import {initialState, reducer} from './reducers/reducer'
import TodoForm from './components/TodoForm'
import actions from './actions/actions'
import logo from './logo.svg';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChanges = e => {
    dispatch(actions.setNewTodo(e.target.value))
  }

  const addNewTodo = e => {
    e.preventDefault()
    dispatch(actions.addNewTodo())
  }

  const clearTodos = e => {
    dispatch(actions.clearTodos())
  }

  return (
    <>
      <div>
        <h1>ToDo's</h1>
        {state.todos.map((todo) => {
          return <p onClick={() => dispatch(actions.toggleTodo(!todo.completed))}>{todo.item}</p>
        })}
      </div>
      <TodoForm todos={state.todos} handleChanges={handleChanges} addNewTodo={addNewTodo} clear={clearTodos}/>
    </>
  );
}

export default App;
