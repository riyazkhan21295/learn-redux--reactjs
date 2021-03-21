import { connect } from 'react-redux';

import * as actionTypes from '../redux/actions/actionTypes';

import TodoList from '../components/TodoList';

const getVisibleTodoList = (todoList, filter) => {
    switch (filter) {
        case actionTypes.SHOW_ACTIVE_TODO:
            return todoList.filter(todo => !todo.completed);

        case actionTypes.SHOW_COMPLETED_TODO:
            return todoList.filter(todo => todo.completed);

        case actionTypes.SHOW_ALL_TODO:
        default:
            return todoList;
    }
};

const mapStateToProps = state => {
    return {
        todoList: getVisibleTodoList(state.todo, state.filter),
    };
};

export default connect(mapStateToProps, null)(TodoList);
