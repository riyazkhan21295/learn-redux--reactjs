import { configureStore } from '@reduxjs/toolkit';

import todoSlice from './slice/todoSlice';
import visibilityFilterSlice from './slice/visibilityFilterSlice';

const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        filter: visibilityFilterSlice.reducer,
    },
});

export default store;
