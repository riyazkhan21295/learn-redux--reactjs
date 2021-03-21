import { createSlice } from '@reduxjs/toolkit';

import * as filterTypes from '../../filterTypes';

const visibilityFilterSlice = createSlice({
    name: 'filter',
    initialState: filterTypes.SHOW_ALL_TODO,
    reducers: {
        setTodoVisibility: (state, action) => setTodoVisibility(state, action),
    },
});

const setTodoVisibility = (state, action) => {
    return action.payload.filter;
};

export default visibilityFilterSlice;
