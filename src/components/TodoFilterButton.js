import * as actionCreators from '../redux/actions/indexActions';

const TodoFilterButton = props => {
    const style = {
        marginLeft: '4px',
    };

    return (
        <button
            onClick={() => props.dispatch(actionCreators.setTodoListVisibilityFilter(props.btnType))}
            disabled={props.btnType === props.filter}
            style={style}>
            {props.children}
        </button>
    );
};

export default TodoFilterButton;
