import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Geosuggest from 'react-geosuggest';
import * as travelActions from '../../actions/travelActions';

class CalculatorContainer extends React.Component{
    constructor(){
        super();
        this.setOrigin = this.setOrigin.bind(this);
        this.setDestination = this.setDestination.bind(this);
    }
    setOrigin(origin){
        this.props.actions.setOrigin(origin);
    }
    setDestination(destination){
        this.props.actions.setDestination(destination);
    }
    render(){
        return (
            <div className="row">
                <Geosuggest
                    placeholder="Origin"
                    onChange={(value) => this.setOrigin(value)}
                    onSuggestSelect={(suggest) => this.setOrigin(suggest)}/>
                <Geosuggest
                    placeholder="Destination"
                    onChange={(value) => this.setDestination(value)}
                    onSuggestSelect={(suggest) => this.setDestination(suggest)}/>
            </div>
        );
    }
}

CalculatorContainer.propTypes = {
    actions: PropTypes.func
};

const mapStateToProps = (state) => ({
    travel: state.travel
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(travelActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
