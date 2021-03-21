import * as actionTypes from '../actions/actionTypes';

const todoListVisibilityFilterReducer = (state = actionTypes.SHOW_ALL_TODO, action) => {
    switch (action.type) {
        case actionTypes.SET_TODO_LIST_VISIBILITY_FILTER:
            return action.payload.filter;

        default:
            return state;
    }
};

export default todoListVisibilityFilterReducer;
