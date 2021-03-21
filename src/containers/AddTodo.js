import { useState } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/indexActions';

const AddTodo = props => {
    const [todo, setTodo] = useState('');

    const handleFormSubmit = event => {
        event.preventDefault();

        if (!todo.trim()) return;

        props.dispatch(actionCreators.addTodo(todo));

        setTodo('');
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type='text' value={todo} onChange={event => setTodo(event.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
