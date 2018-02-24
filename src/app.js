import './global-styles';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from './reducers/store.config';

import PropertyModule from './modules/property';

const store = configureStore();

class App extends Component {
	render() {
		return (
			<div className="root">
				<Provider store={store}>
					<PropertyModule
						renderAsTest={this.props.renderAsTest}
					/>
				</Provider>
			</div>
		)
	}
}

App.propTypes = {
	renderAsTest: PropTypes.bool //this is use to avoid error when running test
}

export default App;
