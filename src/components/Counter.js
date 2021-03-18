import { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../redux/actions/index';

const Counter = props => {
    const [isAsyncIncrementClick, setIsAsyncIncrementClick] = useState(false);

    const increment = () => {
        props.onIncrement();
    };

    const decrement = () => {
        props.onDecrement();
    };

    const incrementAsync = () => {
        setIsAsyncIncrementClick(true);

        setTimeout(() => {
            increment();
            setIsAsyncIncrementClick(false);
        }, 1000);
    };

    return (
        <section className='counter'>
            <p>Clicked: {props.counter.value} times</p>
            <p>
                <button onClick={increment} disabled={isAsyncIncrementClick}>
                    +
                </button>
                <button onClick={decrement} disabled={isAsyncIncrementClick}>
                    -
                </button>
                <button disabled={isAsyncIncrementClick || props.counter.value % 2 === 0}>Increment if odd</button>
                <button onClick={incrementAsync}>Increment async</button>
            </p>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(actions.increment()),
        onDecrement: () => dispatch(actions.decrement()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
