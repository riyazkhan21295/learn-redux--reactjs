import { useSelector } from 'react-redux';
import TodoFilterButton from '../components/TodoFilterButton';

import * as filterTypes from '../filterTypes';

const TodoFilter = props => {
    const filter = useSelector(state => state.filter);

    return (
        <div className='todo__filter'>
            <span>Show: </span>

            <TodoFilterButton filter={filter} btnType={filterTypes.SHOW_ALL_TODO}>
                All
            </TodoFilterButton>
            <TodoFilterButton filter={filter} btnType={filterTypes.SHOW_ACTIVE_TODO}>
                Active
            </TodoFilterButton>
            <TodoFilterButton filter={filter} btnType={filterTypes.SHOW_COMPLETED_TODO}>
                Completed
            </TodoFilterButton>
        </div>
    );
};

export default TodoFilter;
