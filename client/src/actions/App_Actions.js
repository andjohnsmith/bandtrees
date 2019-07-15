/*
 * Authors: Austin Vanburen
 * Description: Actions for the App..
 */

import axios from 'axios';

export const setTop = (state) => {
	return {
	 	type: "CHANGE_APP_TOP",
	 	payload: state,
 	};
}
export const setBottom = (state) => {
	return {
	 	type: "CHANGE_APP_BOTTOM",
	 	payload: state,
 	};
}
