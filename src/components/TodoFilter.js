import TodoFilterButton from './TodoFilterButton';

import * as actionTypes from '../redux/actions/actionTypes';

const TodoFilter = props => {
    return (
        <div className='todo__filter'>
            <span>Show: </span>

            <TodoFilterButton {...props} btnType={actionTypes.SHOW_ALL_TODO}>
                All
            </TodoFilterButton>
            <TodoFilterButton {...props} btnType={actionTypes.SHOW_ACTIVE_TODO}>
                Active
            </TodoFilterButton>
            <TodoFilterButton {...props} btnType={actionTypes.SHOW_COMPLETED_TODO}>
                Completed
            </TodoFilterButton>
        </div>
    );
};

export default TodoFilter;
