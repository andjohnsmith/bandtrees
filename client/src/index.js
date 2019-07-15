/*
 * Authors: Austin Vanburen, Andrew Smith
 * Description: Connects our root component (App.js), our storage, and our middleware.
 */

//React specific boiler plate.
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import {allReducers} from './reducers/rootReducer.js'
import App from './App';

//CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Impported Middleware
import thunk from 'redux-thunk';

//Applys Middleware
const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
