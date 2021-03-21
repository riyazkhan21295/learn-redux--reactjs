import { useDispatch } from 'react-redux';

import * as actionCreators from '../redux/indexActions';

const TodoItem = props => {
    const dispatch = useDispatch();

    const style = {
        cursor: 'pointer',
        textDecoration: props.completed ? 'line-through' : 'none',
    };

    return (
        <li onClick={() => dispatch(actionCreators.toggleTodo({ todoId: props.id }))} style={style}>
            {props.text}
        </li>
    );
};

export default TodoItem;
