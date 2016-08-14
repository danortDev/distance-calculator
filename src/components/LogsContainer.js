import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const setLog = logs =>
    logs.map( (log, index) =>
        
    );

const LogsContainer = ({logs}) => (
    <div>Log container</div>
);

const mapStateToProps = state => ({
    logs: state.logs
})

export default connect(mapStateToProps)(LogsContainer);
