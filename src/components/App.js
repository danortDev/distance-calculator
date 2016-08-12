import React, {PropTypes} from 'react';

class App extends React.Component {
	render() {
		return (
            <div className="app-container">
                <h1> React Distance Calculator </h1>
                {this.props.children}
            </div>
		);
	}
}
App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
