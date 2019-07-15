/*
 * Authors: Austin Vanburen
 * Description: Actions for the Search component.
 */

import axios from 'axios';

//Updates the string value represented in our search box. Used to filter out search results.
export const setSearchField = (text) => {
	return {
	 	type: "CHANGE_SEARCH_FIELD",
	 	payload: text,
 	};
}

//Stores artists in BioPane_Reducer.
/* Searches database, retrieving a list of artists sharing who share artistName at the start of their name.
 * Data Sent:
 *	artistName
 *
 * Data Retrieved:
 *	artists[] where
 * 	Artist = { ArtistId: int,
 *			   ArtistName: string,
 *			   YearStart: int,
 *			   YearEnd: int (maybe NULL)
 * 			 }
 */
export const searchArtists = (artistName) => {
	console.log(artistName);
	return dispatch => {
		axios
			.get('bandtrees/api/v1/artists/', {
                params: {
                    name: artistName
                }
            })
			.then(res => {
				dispatch(searchArtistsSuccess(res.data));
			})
			.catch (err => {
				//dispatch(activatePromotionFailure(err.message));
			})
	};
}

const searchArtistsSuccess = (artists) => {
	return {
	 	type: "GENERIC_ARTIST_SEARCH",
	 	payload: artists,
 	};
}
