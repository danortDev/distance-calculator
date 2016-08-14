import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import CalculatorForm from './CalculatorForm';
import ResultsList from './ResultsList';
import * as travelActions from '../../actions/travelActions';
import validate from './validate';

const DecoredCalculatorForm = reduxForm({
	form: 'calculate-distance',
	fields: [
		'origin',
		'destination'
	],
	validate,
}, state => ({
	initialValues: {
		origin: state.travel.origin,
		destination: state.travel.destination,
	}
}))(CalculatorForm);

class CalculatorContainer extends React.Component{
	componentWillMount(){
		this.props.queryParams.origin
			&& this.props.actions.setOrigin(this.props.queryParams.origin);
		this.props.queryParams.destination
			&& this.props.actions.setDestination(this.props.queryParams.destination);
	}
	componentDidMount(){
		let origin = this.props.queryParams.origin;
		let destination = this.props.queryParams.destination;
		origin && destination &&
			this.props.actions.calculateDistance(
				{origin,destination},
				this.props.dispatch
			);
	}
	onSubmit(location, dispatch){
		return dispatch(
			travelActions.calculateDistance(location, dispatch)
		);
    }
    render(){
        return (
			<div className="row">
				<DecoredCalculatorForm
					ref="calculatorForm"
					submit={this.onSubmit}/>
				<ResultsList results={this.props.travel.results}/>
			</div>
        );
    }
}

CalculatorContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    travel: PropTypes.object.isRequired,
	queryParams: PropTypes.object,
	dispatch: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    travel: state.travel,
	queryParams: ownProps.location.query
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(travelActions, dispatch),
	dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
