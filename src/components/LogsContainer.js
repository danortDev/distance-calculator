import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LogRow from './LogRow';

const setLog = logs =>
    logs.map( (log, index) =>
        <LogRow key={index} {...log} />
    );

const LogsContainer = ({logs}) => (
    <div>
        {logs.length > 0 && <LogRow action="Action" at="Ocurred At" />}
        {setLog(logs)}
    </div>
);

LogsContainer.propTypes = {
    logs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    logs: state.logs
})

export default connect(mapStateToProps)(LogsContainer);
