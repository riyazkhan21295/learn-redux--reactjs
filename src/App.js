import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import TodoFilter from './containers/TodoFilter';

const App = props => {
    return (
        <>
            <AddTodo />
            <TodoList />
            <TodoFilter />
        </>
    );
};

export default App;
