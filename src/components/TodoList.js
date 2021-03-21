import TodoItem from './TodoItem';

import * as actionCreators from '../redux/actions/indexActions';

const TodoList = props => {
    const todoList = props.todoList.map(todo => {
        return <TodoItem key={todo.id} {...todo} onClick={() => props.dispatch(actionCreators.toggleTodo(todo.id))} />;
    });

    return <ul>{todoList}</ul>;
};

export default TodoList;
