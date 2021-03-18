import * as actionTypes from './actionsTypes';

export const increment = () => {
    return {
        type: actionTypes.COUNTER.INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: actionTypes.COUNTER.DECREMENT,
    };
};
