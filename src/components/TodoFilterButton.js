import { useDispatch } from 'react-redux';

import * as actionCreators from '../redux/indexActions';

const TodoFilterButton = props => {
    const dispatch = useDispatch();

    const style = {
        marginLeft: '4px',
    };

    return (
        <button
            onClick={() => dispatch(actionCreators.setTodoVisibility({ filter: props.btnType }))}
            disabled={props.btnType === props.filter}
            style={style}>
            {props.children}
        </button>
    );
};

export default TodoFilterButton;
