import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LogRow from './LogRow';

const setLog = logs =>
    logs.map( (log, index) =>
        <LogRow key={index} {...log} />
    );

const LogsContainer = ({logs}) => (
    <div className="logs-container">
        {logs.length > 0 &&
            <div>
                <h3 className="no-margin">Activity log...</h3>
                <LogRow action="Action" at="Ocurred At" />
            </div>
        }
        {setLog(logs)}
    </div>
);

LogsContainer.propTypes = {
    logs: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    logs: state.logs
});

export default connect(mapStateToProps)(LogsContainer);
