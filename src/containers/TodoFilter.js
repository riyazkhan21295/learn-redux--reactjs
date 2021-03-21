import { connect } from 'react-redux';

import TodoFilter from '../components/TodoFilter';

const mapStateToProps = state => {
    return {
        filter: state.filter,
    };
};

export default connect(mapStateToProps, null)(TodoFilter);
