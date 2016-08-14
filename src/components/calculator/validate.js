const validate = values => {
	const errors = {};
    errors.origin = !values.origin && "Please select the origin point";
    errors.destination = !values.destination && "Please select the destination point";
    return errors;
};

export default validate;
