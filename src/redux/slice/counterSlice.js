import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementBy: (state, action) => {
            state.value += action.payload;
        },
        decrementBy: (state, action) => {
            state.value -= action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { incrementBy, decrementBy } = counterSlice.actions;

export default counterSlice.reducer;
