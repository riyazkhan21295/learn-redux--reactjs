import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    value: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COUNTER.INCREMENT:
            return increment(state, action);

        case actionTypes.COUNTER.DECREMENT:
            return decrement(state, action);

        default:
            return state;
    }
};

const increment = (state, action) => {
    return {
        ...state,
        value: state.value + 1,
    };
};

const decrement = (state, action) => {
    return {
        ...state,
        value: state.value - 1,
    };
};

export default reducer;
