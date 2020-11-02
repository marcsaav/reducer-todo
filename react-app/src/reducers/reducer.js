
export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
          }
    ],
    item: ''
}

export const reducer = (state, action) => {
    switch(action.type) {
        case('SET_NEW_TODO'):
            return({...state, item: action.payload})
        case('ADD_NEW_TODO'):
            let newTodo = {
                item: state.item,
                completed: false,
                id: new Date()
            }
            return({...state, todos: [...state.todos, newTodo]})
        case('TOGGLE_TODO'):
            return({...state, todos: [...state.todos]})
        case('CLEAR'):
            return({...state, todos: state.todos.filter((todo) => {
                if(todo.completed === true) {
                    return null
                } else {
                    return todo
                }
            })})
        default:
            return state
    }
}
