/*
 * Authors: Austin Vanburen, Andrew Smith
 * Description: Root Reducer combines all reducers for our web application. This reducer is then attached to our store
 * in index.js.
 *
 * In order to add a reducer, first import it from the file path, and then assign in to a new property within the
 * combineReducers function.
 *
 * The name of this property will be used to access the associated data from the reducer. I.e "buttonInfo.PROPERTY"
 */

//Boiler plate
import {combineReducers} from 'redux';

//Imported Reducers
import Search_Reducer from './Search_Reducer.js';
import BioPane_Reducer from './BioPane_Reducer.js';
import App_Reducer from './App_Reducer.js';

export const allReducers = combineReducers({
	search: Search_Reducer,
	bio: BioPane_Reducer,
	app: App_Reducer,
});