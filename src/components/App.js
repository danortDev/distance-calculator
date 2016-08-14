import React, {PropTypes} from 'react';
import ReduxToastr from 'react-redux-toastr'

class App extends React.Component {
	render() {
		return (
            <div className="app-container">
                <h1> React Distance Calculator </h1>
                {this.props.children}
				<ReduxToastr
					position="top-right"
					timeOut={4000}
					newestOnTop={false}/>
            </div>
		);
	}
}
App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
