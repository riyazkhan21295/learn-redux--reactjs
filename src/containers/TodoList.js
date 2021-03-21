import { useSelector } from 'react-redux';

import * as filterTypes from '../filterTypes';

import TodoItem from '../components/TodoItem';

const getVisibleTodoList = (todoList, filter) => {
    switch (filter) {
        case filterTypes.SHOW_ACTIVE_TODO:
            return todoList.filter(todo => !todo.completed);

        case filterTypes.SHOW_COMPLETED_TODO:
            return todoList.filter(todo => todo.completed);

        case filterTypes.SHOW_ALL_TODO:
        default:
            return todoList;
    }
};

const TodoList = props => {
    const todoList = useSelector(state => getVisibleTodoList(state.todo, state.filter));

    const renderTodoList = todoList.map(todo => <TodoItem key={todo.id} {...todo} />);

    return <ul>{renderTodoList}</ul>;
};

export default TodoList;
