import * as actionTypes from '../actions/actionTypes';

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return addTodo(state, action);

        case actionTypes.TOGGLE_TODO:
            return toggleTodo(state, action);

        default:
            return state;
    }
};

const addTodo = (state, action) => {
    const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
    };

    return [...state, newTodo];
};

const toggleTodo = (state, action) => {
    const newState = [...state];

    const index = newState.findIndex(todo => todo.id === action.payload.todoId);

    newState[index].completed = !newState[index].completed;

    return newState;
};

export default todoReducer;
