import React from 'react'

export default function TodoForm(props) {

    const { item, handleChanges, addNewTodo, clear } = props

    return(
        <div>
            <form onSubmit={addNewTodo}>
                <label> Add ToDo:
                    <input
                    type='text'
                    name='todo'
                    value={item}
                    onChange={handleChanges}
                    >
                    </input>
                </label>
                <button type='submit'>Submit</button>
            </form>
            <button onClick={clear}>Clear ToDo's</button>
        </div>
    )
}