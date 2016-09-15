import React, {PropTypes} from 'react';
import GeosuggestInput from './GeosuggestInput';
import SubmitButton from './SubmitButton';

const CalculatorForm = ({
    fields,
    handleSubmit,
    submit,
    submitting
}) => (
    <form
        className="align-right"
        onSubmit={handleSubmit(submit)}>
        <div className="row">
            <div className="col-xs-6">
                <GeosuggestInput
                    placeholder="Origin"
                    field={fields.origin}/>
            </div>
            <div className="col-xs-6">
                <GeosuggestInput
                    placeholder="Destination"
                    field={fields.destination}/>
                <SubmitButton type="submit" disabled={submitting}/>
            </div>
        </div>
    </form>
);

CalculatorForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default CalculatorForm;
