/*
 * Authors: Austin Vanburen
 * Description: Stored information for the App component. Accessed via the properties set in the initialState.
 * No interaction with database.
 */


//top states: 'w' = welcome, 's' = search results, 'b' = bio
//bottom states: 'e' = empty, 'l' = list
const initialState = {
    top: 'w',
    bottom: 'e',
}

export default function (state=initialState, action)  {
	switch(action.type){
		//Changes search field.
		case "CHANGE_APP_TOP":
			return {...state, top: action.payload};
		case "CHANGE_APP_BOTTOM":
			return {...state, bottom: action.payload};
		default: 
			return state;
	};
};
