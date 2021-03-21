import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import todoListVisibilityFilterReducer from './todoListVisibilityFilterReducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    filter: todoListVisibilityFilterReducer,
});

export default rootReducer;
