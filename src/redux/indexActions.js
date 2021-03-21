import todoSlice from './slice/todoSlice';
import visibilityFilterSlice from './slice/visibilityFilterSlice';

export const { addTodo, toggleTodo } = todoSlice.actions;
export const { setTodoVisibility } = visibilityFilterSlice.actions;
