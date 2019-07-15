/*
 * Authors: Austin Vanburen
 * Description: Stored information for the Search component. Accessed via the properties set in the initialState.
 */

//Search Field = contents of search bar
//artists = an array of artists containing the following information. Loaded by clicking the search button.
//	ArtistId, DateStart, ArtistName, ImageURL
//artists may be loaded from a search button click.

const initialState = {
	searchField: '',
	artists: [],
}

/* Data Retrieved:
 *	artists[] where
 * 	artist = { ArtistId: int,
 *			   ArtistName: string,
 *			   YearStart: int,
 *			   YearEnd: int (maybe NULL)
 * 			 }
 */
export default function (state=initialState, action)  {
	switch(action.type){
		//Changes search field.
		case "CHANGE_SEARCH_FIELD":
		console.log(action);
			return {...state, searchField: action.payload };
			
		case "GENERIC_ARTIST_SEARCH":
		case "ARTIST_RELATED_SEARCH":
		case "ARTIST_INSPO_SEARCH":
		case "ARTIST_INSPO_FOR_SEARCH":
			console.log(action.payload); //TODO:
            return {...state, artists: action.payload };

		case "CLEAR_SEARCH":
			return initialState;
		default:
			return state;
	};
};
