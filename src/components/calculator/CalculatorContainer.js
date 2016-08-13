import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import CalculatorForm from './CalculatorForm';
import * as travelActions from '../../actions/travelActions';
import validate from './validate';

const DecoredCalculatorForm = reduxForm({
	form: 'calculate-distance',
	fields: [
		'origin',
		'destination'
	],
	validate,
})(CalculatorForm);

class CalculatorContainer extends React.Component{
    onSubmit(location, dispatch){
		dispatch(travelActions.setOrigin(location.origin));
		dispatch(travelActions.setDestination(location.destination));
		dispatch(travelActions.calculateDistance(location));
    }
    render(){
        return (
            <DecoredCalculatorForm
                submit={this.onSubmit}/>
        );
    }
}

CalculatorContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    travel: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    travel: state.travel
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(travelActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
