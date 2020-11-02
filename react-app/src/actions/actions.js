
const setNewTodo = (item) => {
    return ({type:'SET_NEW_TODO', payload: item})
}

const addNewTodo = () => {
    return ({type:'ADD_NEW_TODO'})
}

const toggleTodo = (ifComplete) => {
    return ({type:'TOGGLE_TODO', payload: ifComplete})
}

const clearTodos = () => {
    return({type:'CLEAR'})
}

export default {
    setNewTodo: setNewTodo,
    addNewTodo: addNewTodo,
    toggleTodo: toggleTodo,
    clearTodos: clearTodos
}