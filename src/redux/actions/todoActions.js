import * as actionTypes from './actionTypes';

export const addTodo = text => {
    return {
        type: actionTypes.ADD_TODO,
        payload: {
            text,
        },
    };
};

export const toggleTodo = todoId => {
    return {
        type: actionTypes.TOGGLE_TODO,
        payload: {
            todoId,
        },
    };
};

export const setTodoListVisibilityFilter = filter => {
    return {
        type: actionTypes.SET_TODO_LIST_VISIBILITY_FILTER,
        payload: {
            filter,
        },
    };
};
