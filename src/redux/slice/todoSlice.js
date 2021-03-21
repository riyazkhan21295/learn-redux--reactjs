import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => addTodo(state, action),
        toggleTodo: (state, action) => toggleTodo(state, action),
    },
});

const addTodo = (state, action) => {
    const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
    };

    return [...state, newTodo];
};

const toggleTodo = (state, action) => {
    const index = state.findIndex(todo => todo.id === action.payload.todoId);
    state[index].completed = !state[index].completed;

    return state;
};

export default todoSlice;
