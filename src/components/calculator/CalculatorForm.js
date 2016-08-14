import React, {PropTypes} from 'react';
import GeosuggestInput from './GeosuggestInput';
import SubmitButton from './SubmitButton';

const CalculatorForm = ({
    fields,
    handleSubmit,
    submit,
    submitting
}) => (
    <form onSubmit={handleSubmit(submit)}>
        <GeosuggestInput
            placeholder="Origin"
            field={fields.origin}/>
        <GeosuggestInput
            placeholder="Destination"
            field={fields.destination}/>
        <SubmitButton type="submit" disabled={submitting}/>
    </form>
);

CalculatorForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

export default CalculatorForm;
