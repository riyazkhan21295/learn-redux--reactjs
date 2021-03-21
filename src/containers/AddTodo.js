import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actionCreators from '../redux/indexActions';

const AddTodo = props => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleFormSubmit = event => {
        event.preventDefault();

        if (!todo.trim()) return;

        dispatch(actionCreators.addTodo({ text: todo }));

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

export default AddTodo;
