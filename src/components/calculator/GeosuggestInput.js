import React, {PropTypes} from 'react';
import Geosuggest from 'react-geosuggest';
import InputError from './InputError';

const bindSuggestToValue = (suggest, field) =>
    field.onChange(suggest);

const GeosuggestInput = ({placeholder, field}) => (
    <div>
        <Geosuggest
            {...field}
            placeholder={placeholder}
            onSuggestSelect={(suggest) => bindSuggestToValue(suggest, field)}/>
        {field.touched && field.error && <InputError error={field.error}/>}
    </div>
);

GeosuggestInput.propTypes = {
    placeholder: PropTypes.string,
    field: PropTypes.object.isRequired
};

GeosuggestInput.defaultProps = {
    placeholder: "Search location"
};

export default GeosuggestInput;
