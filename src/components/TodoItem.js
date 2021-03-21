const TodoItem = props => {
    const style = {
        cursor: 'pointer',
        textDecoration: props.completed ? 'line-through' : 'none',
    };

    return (
        <li onClick={props.onClick} style={style}>
            {props.text}
        </li>
    );
};

export default TodoItem;
