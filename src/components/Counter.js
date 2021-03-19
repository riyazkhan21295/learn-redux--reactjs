import { useSelector, useDispatch } from 'react-redux';

import { incrementBy, decrementBy } from '../redux/slice/counterSlice';

const Counter = props => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <section className='counter'>
            <p>Clicked: {count} times</p>
            <p>
                <button onClick={() => dispatch(incrementBy(1))}>Increment By 1</button>
                <button onClick={() => dispatch(decrementBy(1))}>Decrement By 1</button>
                <button onClick={() => dispatch(incrementBy(5))}>Increment By 5</button>
                <button onClick={() => dispatch(decrementBy(5))}>Decrement By 5</button>
            </p>
        </section>
    );
};

export default Counter;
